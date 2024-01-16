'use client'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Proje from './Components/Projects/Projext';
import Urunler from './Components/Products/Products';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SosyalBar from './Components/Sosyal/SosyalBar';
import Galeri from './Components/Galeri/Galeri';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: 'linear-gradient(122deg, #ffffff 0%, #cccccc 100%)',
        },
      },
    },
  },
});

export default function Pages() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SosyalBar/>
      <Header/> 
      <Urunler/>   
      <About/>
      <Galeri/>
      <Proje/>
      <Footer/>      
    </ThemeProvider>
  );
}