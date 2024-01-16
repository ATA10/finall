import React, { useState } from 'react';
import { IconButton, Modal, Typography, TextField, Button, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/AddCircleSharp';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import Image from 'next/image';


interface EkleProps {
  AddGaleri: (newGaleriItem: any) => void; 
  GaleriList: any[]; 
}

const Ekle: React.FC<EkleProps> = ({ AddGaleri, GaleriList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newGaleri, setNewGaleri] = useState({
    img: null, 
    title: '',
  });
  
    const handleOpen = () => {
      setIsOpen(true);
    };
  
    const handleClose = () => {
      setIsOpen(false);
      setNewGaleri({
        img: null,
        title: '',
      });
    };
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewGaleri({
        ...newGaleri,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const selectedFile = e.target.files[0];
  
        if (selectedFile) {
          const formData = new FormData();
          formData.append('file', selectedFile);
          console.log(formData);
    
    
          try {
            const response = await fetch('/api/upload/', {
              method: 'POST',
              body: formData,
            });
    
            if (response.ok) {
              const responseData = await response.json();
    
              setNewGaleri({
                ...newGaleri,
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
      }
    };
  
    const handleAddGaleri = () => {
      const newGaleriItem = {
        id: Math.max(...GaleriList.map(item => item.id), 0) + 1,
        img: '/'+ newGaleri.img,
        title: newGaleri.title,
      };
  
      AddGaleri(newGaleriItem);
      setIsOpen(false);
      setNewGaleri({
        img: null,
        title: '',
      });
    };
  
    return (
      <>
      <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      width="80%" // Tablonun genişliğini ayarla
      margin="auto" // Tabloyu yatayda ortala
      >
        <Button component="label" variant="contained" onClick={handleOpen} startIcon={<CloudUploadIcon />}>
                Fotoğraf Ekle
        </Button>
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
              value={newGaleri.title}
              onChange={handleInputChange}
              name="title"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            {newGaleri.img && (
              <Image
              src={`/${newGaleri.img}`}
              alt="Selected"
              width={300}
              height={300}
                style={{ width: '100%', marginTop: '10px' }}
              />
            )}
            <Button component="label" variant="contained" onClick={handleAddGaleri} startIcon={<CloudUploadIcon />}>
                Galeriye Ekle
                <VisuallyHiddenInput type="file" />
            </Button>
          </div>
        </Modal>
        </Box>
      </>
    );
  }

 const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  export default Ekle;