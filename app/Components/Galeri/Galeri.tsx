import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

import GaleriData from "../../../public/data/Galeri.json";

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
            {GaleriData.map((item, index) => (
                <div key={index}>
                {/* <Label>{item.title}</Label> */}
                <img
                    srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=162&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    style={{
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    display: 'block',
                    width: '100%',
                    }}
                />
                </div>
            ))}
            </Masonry>
        </Box>
    </Box>
    </>
  );
}