import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Modal } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';

import ProjectList from "../../../public/data/Projeler.json";

interface Productss {
  id: number;
  img: string;
  title: string;
  description: string;
}

export default function Project() {
  const [selectedProduct, setSelectedProduct] = useState<Productss | null>(null);

  const handleCardClick = (product: Productss) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  return (
    <>
    <Container maxWidth="xl" fixed id="projeler">
      <Box sx={{ height: '5vh' }}/>
      <Typography variant="h3" gutterBottom style={{ textAlign: 'center' }}>
        PROJELERİMİZ
      </Typography>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 12, sm: 4, md: 16 }}
        justifyContent="center"
        alignItems="center"
      >
        {ProjectList.map((product, index) => (
          <Grid item xs={12} sm={4} md={6} key={index}>
            <Card sx={{ maxWidth: 600, margin: 'auto', maxHeight: 600}} onClick={() => handleCardClick(product)}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="340"
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
        <div style={{ display: 'flex', alignItems: 'center', overflow: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '20px' }}>
          <div style={{ marginRight: '20px' }}>
            <Typography variant="h5" gutterBottom style={{ opacity: '1.0' }}>
              {selectedProduct?.title}
            </Typography>
            <Image
              src={`/${selectedProduct?.img ?? ''}`}
              alt={selectedProduct?.title ?? ''}
              width={1000}
              height={800}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>
          <Typography variant="body2" id="product-modal-description">
            {selectedProduct?.description}
          </Typography>
          {/* Fiyatı ekleme */}
        </div>
      </Modal>
    </Container>
    </>
  );
}

