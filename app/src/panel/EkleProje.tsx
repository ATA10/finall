import React, { useState } from 'react';
import { IconButton, Modal, Typography, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/AddCircleSharp';
import { ProjectList } from "../../data/Projeler";

export default function Ekle({ AddProje, ProjeList }) {
  const [isOpen, setIsOpen] = useState(false);
  const [newProje, setNewProje] = useState({
    img: null,
    title: '',
    description: '',
  });

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setNewProje({
      img: null,
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProje({
          ...newProje,
          img: reader.result,
        });
      };
      reader.readAsDataURL(file);
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
    console.log(ProjeList)
    setIsOpen(false);
    setNewProje({
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
            <img
              src={newProje.img}
              alt="Selected"
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
