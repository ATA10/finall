import React, { useState } from 'react';
import { IconButton, Modal, Typography, TextField, Button, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/AddCircleSharp';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

export default function Ekle({ AddGaleri, GaleriList}) {
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
  
    const handleInputChange = (e) => {
      setNewGaleri({
        ...newGaleri,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleFileChange = async (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setNewGaleri({
            ...newGaleri,
            img: reader.result,
          });
        };
        reader.readAsDataURL(file);
  
        // Resmi public/pic klasörüne yükleme
        const formData = new FormData();
        formData.append('file', file);
  
        try {
          const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
          });
  
          if (response.ok) {
            console.log('Resim başarıyla yüklendi.');
          } else {
            console.error('Resim yüklenirken bir hata oluştu.');
          }
        } catch (error) {
          console.error('API isteği sırasında bir hata oluştu', error);
        }
      }
    };
  
    const handleAddGaleri = () => {
      const newGaleriItem = {
        id: Math.max(...GaleriList.map(item => item.id), 0) + 1,
        img: newGaleri.img,
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
              <img
                src={newGaleri.img}
                alt="Selected"
                style={{ width: '100%', marginTop: '10px' }}
              />
            )}
            <Button component="label" variant="contained" onClick={handleAddGaleri} startIcon={<CloudUploadIcon />}>
                Upload file
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