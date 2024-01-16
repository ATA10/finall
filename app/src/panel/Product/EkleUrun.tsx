import React, { ChangeEvent, useState } from 'react';
import { IconButton, Modal, Typography, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/AddCircleSharp';
import Image from 'next/image';

export interface Productss {
  id: number ;
  img: string;
  title: string;
  description: string;
  price: number;
}
interface ProductFormProps1 {
  ProductList: Productss[];
  AddProduct: (newProduct: Productss) => void;
}

const EkleProduct: React.FC<ProductFormProps1> = ({ ProductList, AddProduct }) => {
 
  const [isOpen, setIsOpen] = useState(false);
  const [newProduct, setnewProduct] = useState({
    img: '',
    title: '',
    description: '',
  });

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setnewProduct({
      img: '',
      title: '',
      description: '',
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setnewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      console.log(formData);


      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const responseData = await response.json();

          setnewProduct({
            ...newProduct,
            img: responseData.imagePath, // Update with the received file path
          });

          console.log('File uploaded successfully:', responseData);
        } else {
          console.error('Error uploading file:', response.statusText);
        }
      } catch (error) {
        console.error('API request error:', error);
      }
    }
  };

  const handleAddProduct = () => {
    const newProductItem = {
      id: Math.max(...ProductList.map(item => item.id), 0) + 1,
      img: newProduct.img,
      title: newProduct.title,
      description: newProduct.description,
      price: 0,
    };

    AddProduct(newProductItem);
    
    setIsOpen(false);
    setnewProduct({
      img: '',
      title: '',
      description: '',
    });
  };

  return (
    <>
      <IconButton aria-label="add" color="secondary" onClick={handleOpen}>
        <AddIcon fontSize="large" />
      </IconButton>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="add-modal"
        aria-describedby="add-modal-description"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ backgroundColor: 'white', padding: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Yeni Veri Ekle
          </Typography>
          <TextField
            label="Başlık"
            variant="outlined"
            fullWidth
            value={newProduct.title}
            onChange={handleInputChange}
            name="title"
          />
          <TextField
            label="Açıklama"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={newProduct.description}
            onChange={handleInputChange}
            name="description"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          {newProduct.img && (
            <Image
              src={`/${newProduct.img}`}
              alt="Selected"
              width={300}
              height={300}
              style={{ width: '100%', marginTop: '10px' }}
            />
          )}
          <Button variant="contained" onClick={handleAddProduct}>
            Ekle
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default EkleProduct;
