import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { Link, animateScroll as scroll } from 'react-scroll';
import Modal from '@mui/material/Modal';
import Doviz from '../Doviz';

const NavBar = ({ scrollPosition }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box id="anasayfa">
      <AppBar
        position="fixed"
        style={{height:80}}
      >
        <Toolbar>
          <Typography variant="h3" color={scrollPosition < 100 ? 'white' : 'black'}>
            Admin
          </Typography>
          <Box display="flex" alignItems="center" sx={{ marginLeft: 'auto' }}>
            <Link to="anasayfa" spy={true} smooth={true} offset={-70} duration={500}>
              <Typography variant="h5" sx={{ marginLeft: 2, color: scrollPosition < 100 ? 'white' : 'black', fontWeight: 'bold', fontFamily: 'serif' }}>
                ANASAYFA
              </Typography>
            </Link>
            <Link to="projeler" spy={true} smooth={true} offset={-70} duration={500}>
              <Typography variant="h5" sx={{ marginLeft: 2, color: scrollPosition < 100 ? 'white' : 'black', fontWeight: 'bold', fontFamily: 'serif' }}>
                Projeler
              </Typography>
            </Link>
            <Link to="urunler" spy={true} smooth={true} offset={-70} duration={500}>
              <Typography variant="h5" sx={{ marginLeft: 2, color: scrollPosition < 100 ? 'white' : 'black', fontWeight: 'bold', fontFamily: 'serif' }}>
                Ürünler
              </Typography>
            </Link>
            <Link to="galeri" spy={true} smooth={true} offset={-70} duration={500}>
              <Typography variant="h5" sx={{ marginLeft: 2, color: scrollPosition < 100 ? 'white' : 'black', fontWeight: 'bold', fontFamily: 'serif' }}>
                GALERİ
              </Typography>
            </Link>
            <Link to="mail" spy={true} smooth={true} offset={-70} duration={500}>
              <Typography
                variant="h5"
                sx={{ marginLeft: 2, color: scrollPosition < 100 ? 'white' : 'black', fontWeight: 'bold', fontFamily: 'serif' }}
              >
                E-Mail
              </Typography>
            </Link>
            <Link to="" spy={true} smooth={true} offset={-70} duration={500}>
              <Typography
                onClick={handleOpen}
                variant="h5"
                sx={{ marginLeft: 2, marginRight: 30, color: scrollPosition < 100 ? 'white' : 'black', fontWeight: 'bold', fontFamily: 'serif' }}
              >
                Döviz  
              </Typography>
            </Link>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Doviz/>
            </Modal>
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
      <Box sx={{ height: '10vh' }} />
    </>
  );
};

export default App;
