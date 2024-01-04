import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { Modal, Typography, TextField, Button, Box } from '@mui/material';

import Ekle from './EkleUrun';

export default function ProductctForm({ProductList, setProductList, AddProduct}) {

  const [selectedProduct, setselectedProduct] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  const handleCardClick = (Product) => {
    setselectedProduct(Product);
    setEditedTitle(Product.title);
    setEditedDescription(Product.description);
  };

  const handleCloseModal = () => {
    setselectedProduct(null);
    setEditedTitle('');
    setEditedDescription('');
  };

  const handleUpdate = () => {
    // Güncellenen veriyi oluştur
    const updatedProduct = {
      ...selectedProduct,
      title: editedTitle,
      description: editedDescription,
    };


    // Güncellenen ürünü yerel state içinde bul
    const updatedProductList = ProductList.map((Product) =>
      Product === selectedProduct ? updatedProduct : Product
    );
    // Modal'ı kapat
    handleCloseModal();
  };

  return (
    <>
      <Box sx={{ height: '5vh' }} />
      <Typography variant="h3" gutterBottom style={{ textAlign: 'center' }}>
        ProductLERİMİZ
      </Typography>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 4, md: 20 }}
        justifyContent="center"
        alignItems="center"
      >
        {ProductList.map((Product, index) => (
          <Grid item xs={2} sm={2} md={2} key={index}>
            <Card sx={{ maxWidth: 300, margin: 'auto', maxHeight: 200 }} onClick={() => handleCardClick(Product)}>
              <CardMedia
                component="img"
                height="240"
                image={Product.img}
                alt={Product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {Product.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>     
        ))}     
        <Ekle AddProduct={AddProduct} ProductList={ProductList} />  
      </Grid> 
      {/* Modal */}
      <Modal
        open={Boolean(selectedProduct)}
        onClose={handleCloseModal}
        aria-labelledby="Product-modal"
        aria-describedby="Product-modal-description"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ overflow: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '20px' }}>
          <Typography variant="h5" gutterBottom style={{ opacity: '1.0' }}>
            {selectedProduct?.title}   # {selectedProduct?.id}
          </Typography>
          <img src={selectedProduct?.img} alt={selectedProduct?.title} style={{ maxWidth: '100%', maxHeight: '100%' }} />
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
