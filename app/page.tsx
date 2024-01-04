'use client'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Proje from './Components/Projects/Projext';
import Urunler from './Components/Products/Products';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

export default function Pages() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" fixed>
      {/* HEADER */}
      <Header/>
      <Box sx={{ bgcolor: '#cfe8fc', height: '20vh' }}>
        {/* İçerik veya diğer bileşenler buraya gelebilir */}
      </Box>    
      <Urunler/>   
      <About/>
      <Proje/>
      <Footer/>
    </Container>
      
    </React.Fragment>
  );
}