import React, { useState } from 'react';
import { IconButton, Modal, Typography, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/AddCircleSharp';
import Image from 'next/image';

export default function Ekle({ AddProje, ProjeList }) {
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [newProje, setNewProje] = useState({
    img: '',
    title: '',
    description: '',
  });

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setNewProje({
      img: '',
      title: '',
      description: '',
    });
  };

  const handleInputChange = (e) => {
    setNewProje({
      ...newProje,
      [e.target.name]: e.target.value,
    });
  };

  // Update handleFileChange function

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];

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

          setNewProje({
            ...newProje,
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


  const handleAddProje = () => {
    const newProjeItem = {
      id: Math.max(...ProjeList.map(item => item.id), 0) + 1,
      img: newProje.img,
      title: newProje.title,
      description: newProje.description,
    };

    AddProje(newProjeItem);
    setIsOpen(false);
    setNewProje({
      img: '',
      title: '',
      description: '',
    });
  };
  console.log("Image URL:", newProje.img);
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
            value={newProje.title}
            onChange={handleInputChange}
            name="title"
          />
          <TextField
            label="Açıklama"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={newProje.description}
            onChange={handleInputChange}
            name="description"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          
          {newProje.img && (
            <Image
              src={`/${newProje.img}`}
              alt="Selected"
              width={300}
              height={300}
              style={{ width: '100%', marginTop: '10px' }}
            />
          )}
          <Button variant="contained" onClick={handleAddProje}>
            Ekle
          </Button>
        </div>
      </Modal>
    </>
  );
}
