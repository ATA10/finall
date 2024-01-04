import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { CardActionArea, Modal, Typography, TextField, Button, Box } from '@mui/material';

import Ekle from './EkleProje';

export default function ProjectForm({ProjeList, setProjeList, AddProje}) {

  const [selectedProje, setselectedProje] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  const handleCardClick = (proje) => {
    setselectedProje(proje);
    setEditedTitle(proje.title);
    setEditedDescription(proje.description);
  };

  const handleCloseModal = () => {
    setselectedProje(null);
    setEditedTitle('');
    setEditedDescription('');
  };

  const handleUpdate = () => {
    // Güncellenen veriyi oluştur
    const updatedproje = {
      ...selectedProje,
      title: editedTitle,
      description: editedDescription,
    };
    // Güncellenen ürünü yerel state içinde bul
    const updatedProjeList = ProjeList.map((proje) =>
      proje === selectedProje ? updatedproje : proje
    );
    // Modal'ı kapat
    handleCloseModal();
  };

  return (
    <>
      <Box sx={{ height: '5vh' }} />
      <Typography variant="h3" gutterBottom style={{ textAlign: 'center' }}>
        PROJELERİMİZ
      </Typography>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 4, md: 20 }}
        justifyContent="center"
        alignItems="center"
      >
        {ProjeList.map((proje, index) => (
          <Grid item xs={2} sm={2} md={2} key={index}>
            <Card sx={{ maxWidth: 300, margin: 'auto', maxHeight: 200 }} onClick={() => handleCardClick(proje)}>
              <CardMedia
                component="img"
                height="240"
                image={proje.img}
                alt={proje.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {proje.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>     
        ))}     
        <Ekle AddProje={AddProje} ProjeList={ProjeList} />  
      </Grid> 
      {/* Modal */}
      <Modal
        open={Boolean(selectedProje)}
        onClose={handleCloseModal}
        aria-labelledby="proje-modal"
        aria-describedby="proje-modal-description"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ overflow: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '20px' }}>
          <Typography variant="h5" gutterBottom style={{ opacity: '1.0' }}>
            {selectedProje?.title}   # {selectedProje?.id}
          </Typography>
          <img src={selectedProje?.img} alt={selectedProje?.title} style={{ maxWidth: '100%', maxHeight: '100%' }} />
          <TextField
            label="Başlık"
            variant="outlined"
            fullWidth
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <TextField
            label="Açıklama"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <Button variant="contained" onClick={handleUpdate}>
            Güncelle
          </Button>
        </div>
      </Modal>   
    </>
  );
}
