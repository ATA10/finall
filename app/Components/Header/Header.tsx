import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Slider from './slider';
import AppBar from './AppBar';
function Header() {

  return (
    <>
      <AppBar/>
      <Slider/>
    </>     
  );
}
export default Header;