import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <>
    <Box sx={{ height: '10vh', backgroundColor: '#004080', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Typography variant="h4" color="#ccccff">
        FUKOREİS ENDÜSTRİYEL MUTFAK VE SOĞUTMA
      </Typography>
    </Box>
    </>
  );
}