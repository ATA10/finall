import React, { useState } from 'react';
import { IconButton, Modal, Typography, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/AddCircleSharp';
import { ProductList } from "../../data/Urunler";

export default function Ekle({ AddProduct, ProductList }) {
  const [isOpen, setIsOpen] = useState(false);
  const [newProduct, setnewProduct] = useState({
    img: null,
    title: '',
    description: '',
  });

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setnewProduct({
      img: null,
      title: '',
      description: '',
    });
  };

  const handleInputChange = (e) => {
    setnewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setnewProduct({
          ...newProduct,
          img: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProduct = () => {
    const newProductItem = {
      id: Math.max(...ProductList.map(item => item.id), 0) + 1,
      img: newProduct.img,
      title: newProduct.title,
      description: newProduct.description,
    };

    AddProduct(newProductItem);
    console.log(ProductList)
    setIsOpen(false);
    setnewProduct({
      img: null,
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
            <img
              src={newProduct.img}
              alt="Selected"
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
