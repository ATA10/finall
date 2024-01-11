import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { CssBaseline, Container } from '@mui/material';
import { Link, animateScroll as scroll } from 'react-scroll';
import { MdEmail, MdPhoneInTalk, MdOutlineLocationOn } from 'react-icons/md';

const NavBar = ({ scrollPosition }) => {
  return (
    <Box id="anasayfa">
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: `rgba(255, 255, 255, ${scrollPosition < 100 ? 0.1 : 0.7})`,
          backdropFilter: `blur(${scrollPosition < 100 ? 0 : 5}px)`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color={scrollPosition < 100 ? 'white' : 'black'}>
            Fuko Reis İkon
          </Typography>
          <Box display="flex" alignItems="center" sx={{ marginLeft: 'auto' }}>
            <Link to="anasayfa" spy={true} smooth={true} offset={-70} duration={500}>
              <Typography variant="h6" sx={{ marginLeft: 2, color: scrollPosition < 100 ? 'white' : 'black', fontWeight: 'bold', fontFamily: 'serif' }}>
                ANASAYFA
              </Typography>
            </Link>
            <Link to="urunler" spy={true} smooth={true} offset={-70} duration={500}>
              <Typography variant="h6" sx={{ marginLeft: 2, color: scrollPosition < 100 ? 'white' : 'black', fontWeight: 'bold', fontFamily: 'serif' }}>
                ÜRÜNLER
              </Typography>
            </Link>
            <Link to="kurumsal" spy={true} smooth={true} offset={-70} duration={500}>
              <Typography variant="h6" sx={{ marginLeft: 2, color: scrollPosition < 100 ? 'white' : 'black', fontWeight: 'bold', fontFamily: 'serif' }}>
                KURUMSAL
              </Typography>
            </Link>
            <Link to="galeri" spy={true} smooth={true} offset={-70} duration={500}>
              <Typography variant="h6" sx={{ marginLeft: 2, color: scrollPosition < 100 ? 'white' : 'black', fontWeight: 'bold', fontFamily: 'serif' }}>
                GALERİ
              </Typography>
            </Link>
            <Link to="projeler" spy={true} smooth={true} offset={-70} duration={500}>
              <Typography
                variant="h6"
                sx={{ marginLeft: 2, marginRight: 20, color: scrollPosition < 100 ? 'white' : 'black', fontWeight: 'bold', fontFamily: 'serif' }}
              >
                PROJELER
              </Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <NavBar scrollPosition={scrollPosition} />
    </>
  );
};

export default App;
