'use client'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Proje from './Components/Projects/Projext';
import Urunler from './Components/Products/Products';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SosyalBar from './Components/Sosyal/SosyalBar';
import Galeri from './Components/Galeri/Galeri';

export default function Pages() {
  return (
    <React.Fragment>
      <CssBaseline style={{ backgroundImage: 'linear-gradient(122deg, #ffffff 0%, #cccccc 100%)' }}/>
      <SosyalBar/>
      <Header/> 
      <Urunler/>   
      <About/>
      <Galeri/>
      <Proje/>
      <Footer/>      
    </React.Fragment>
  );
}