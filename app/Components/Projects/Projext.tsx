import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Modal } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { ProductList } from "../../data/Projeler";

export default function Project() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  return (
    <>
      <Box sx={{ height: '5vh' }}/>
      <Typography variant="h3" gutterBottom style={{ textAlign: 'center' }}>
        PROJELERİMİZ
      </Typography>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 4, md: 16 }}
        justifyContent="center"
        alignItems="center"
      >
        {ProductList.map((product, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={{ maxWidth: 600, margin: 'auto', maxHeight: 600 }} onClick={() => handleCardClick(product)}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image={product.img}
                  alt={product.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal */}
      <Modal
        open={Boolean(selectedProduct)}
        onClose={handleCloseModal}
        aria-labelledby="product-modal"
        aria-describedby="product-modal-description"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ overflow: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '20px' }}>
          <Typography variant="h5" gutterBottom style={{opacity:'1.0'}}>
            {selectedProduct?.title}
          </Typography>
          <img src={selectedProduct?.img} alt={selectedProduct?.title} style={{ maxWidth: '100%', maxHeight: '100%' }} />
          <Typography variant="body2" id="product-modal-description">
            {selectedProduct?.description}
          </Typography>
          {/* Fiyatı ekleme */}
        </div>
      </Modal>
    </>
  );
}

