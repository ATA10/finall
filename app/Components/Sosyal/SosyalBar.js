import React, { useRef, useState  } from 'react';
import './SabitBox.css'; 

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const telefonNumarasi ='05443374310';

const SosyalBar = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCall = () => {
    window.location.href = `tel:${telefonNumarasi}`;
  };

   const handleCopy = () => {
    navigator.clipboard
      .writeText(telefonNumarasi)
      .then(() => {
        console.log('Telefon numarası panoya kopyalandı:', telefonNumarasi);
        setCopySuccess(true);
      })
      .catch((err) => {
        console.error('Panoya kopyalama başarısız oldu:', err);
      });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setCopySuccess(false);
}
  return (
    <div className="sabit-box">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FacebookIcon style={{ fontSize: 40, margin: '5px 0', color:'darkblue'}} />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <InstagramIcon style={{ fontSize: 40, margin: '5px 0', color:'darkblue'}} />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <TwitterIcon style={{ fontSize: 40, margin: '5px 0', color:'darkblue'}} />
      </a>
      <a href={`tel:${telefonNumarasi}`} 
      style={{ textDecoration: 'none', color: 'inherit' }}>
        <CallIcon
          style={{ fontSize: 40, margin: '5px 10px', cursor: 'pointer', color:'red'}}
          onClick={() => {
            handleCall();
            handleCopy();
          }}
        />
      </a>
      <a href={`https://wa.me/${telefonNumarasi}?text=deneme`} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon style={{ fontSize: 40, margin: '5px 0', color:'green' }} />
      </a>
      <Snackbar open={copySuccess} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <MuiAlert elevation={6} variant="filled" onClose={handleCloseSnackbar} severity="success">
          Telefon numarası panoya kopyalandı!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default SosyalBar;
