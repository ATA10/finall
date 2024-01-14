import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { Modal } from '@mui/material';

import GaleriData from "../../../public/data/Galeri.json";
import { MdFullscreen, MdOutlineFullscreen } from 'react-icons/md';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function ImageMasonry() {
  const [selectedGaleri, setSelectedGaleri] = useState(null);

  const handleCardClick = (galeri) => {
    setSelectedGaleri(galeri);
  };

  const handleCloseModal = () => {
    setSelectedGaleri(null);
  };

  return (
    <>
    <Box sx={{ height: '5vh' }} id="galeri"/>
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh', 
        }}
        >
        <Box sx={{ width: 1500 }}>
            <Masonry columns={3} spacing={2}>
            {GaleriData.map((galeri, index) => (
                <div key={index}>
                {/* <Label>{item.title}</Label> */}
                <Image
                    //srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                    src={`${galeri.img}?w=162&auto=format`}
                    alt={galeri.title}
                    loading="lazy"
                    width={162}
                    height={162}
                    style={{
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    display: 'block',
                    width: '100%',
                    }}
                    onClick={() => handleCardClick(galeri)}
                />
                </div>
            ))}
            </Masonry>
        </Box>
    </Box>
    {/* Modal */}
    <Modal
        open={Boolean(selectedGaleri)}
        onClose={handleCloseModal}
        aria-labelledby="product-modal"
        aria-describedby="product-modal-description"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',        
        }}
      >
        <div
          style={{
            overflow: 'auto',
            backgroundColor: 'rgba(255, 255, 255, 0.0)',
            padding: '1px',
            width: 1000, // Genişlik
            height: 800, // Yükseklik
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backdropFilter: 'blur(9px)',            
          }}
        >
          {/* Modal İçeriği */}
          <Typography variant="h5" gutterBottom style={{ opacity: '1.0'}} color={'white'}>
            {selectedGaleri?.title}
          </Typography>
          <Image 
          src={`${selectedGaleri?.img}`} 
          alt={selectedGaleri?.title} 
          width={800}
          height={600}
          style={{ 
            maxWidth: '100%', 
            maxHeight: '100%' }} />
          <Typography variant="body2" id="product-modal-description">
            {selectedGaleri?.description}
          </Typography>
          {/* Fiyatı ekleme */}
        </div>
      </Modal>
    </>
  );
}