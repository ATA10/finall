import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Modal, Typography, TextField, Button, Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import UploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Image from 'next/image';

import Ekle from './EkleProje';

export default function ProjectForm({ProjeList, setProjeList, AddProje}) {

  const [selectedProje, setselectedProje] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  const handleCardClick = (proje) => {
    setselectedProje(proje);
    setEditedTitle(proje.title);
    setEditedDescription(proje.description);
  };

  const handleCloseModal = () => {
    setselectedProje(null);
    setEditedTitle('');
    setEditedDescription('');
  };

  const handleUpdate = async () => {
    // Güncellenen veriyi oluştur
    const updatedproje = {
      ...selectedProje,
      title: editedTitle,
      description: editedDescription,
    };
    // Güncellenen ürünü yerel state içinde bul
    const updatedProjeList = ProjeList.map((proje) =>
      proje === selectedProje ? updatedproje : proje
    );

    // TODO: Yerel state'i güncelle
    setProjeList(updatedProjeList);

    try {
      // API'ye POST isteği gönderme
      const response = await fetch('/api/ServerProje', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProjeList),
      });

      if (response.ok) {
        console.log('Ürün başarıyla güncellendi');
      } else {
        console.error('Ürün güncellenirken bir hata oluştu');
      }
    } catch (error) {
      console.error('API isteği sırasında bir hata oluştu', error);
    }
    // Modal'ı kapat
    handleCloseModal();
  };

  // Fonksiyon: Sil butonuna tıklandığında çalışır, seçili ürünü siler ve modal'ı kapatır
  const handleDelete = async (silinecek) => {
    // Silinen ürünü yerel state içinden filtrele
    const updatedProjeList = ProjeList.filter((Proje) => Proje.id !== silinecek);

    // TODO: Yerel state'i güncelle
    setProjeList(updatedProjeList);
    try {
      // API'ye POST isteği gönderme
      const response = await fetch('/api/ServerProje', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProjeList),
      });

      if (response.ok) {
        console.log('Ürün başarıyla güncellendi');
      } else {
        console.error('Ürün güncellenirken bir hata oluştu');
      }
    } catch (error) {
      console.error('API isteği sırasında bir hata oluştu', error);
    }
  };

  return (
    <>
      <Box sx={{ height: '5vh' }} />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="80%" // Tam genişlik
        margin="auto" // Ortala
      >
      <Box display="flex" >
        <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>
          Projelerimiz
        </Typography>    
        <Ekle AddProje={AddProje} ProjeList={ProjeList} />  
      </Box>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 4, md: 24 }}
        justifyContent="center"
        alignItems="center"        
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>id</StyledTableCell>
                <StyledTableCell>Fotoğraf</StyledTableCell>
                <StyledTableCell align="center">Başlık</StyledTableCell>
                <StyledTableCell align='center'>Açıklama</StyledTableCell>
                <StyledTableCell align="center">Güncelle</StyledTableCell>
                <StyledTableCell align="center">sil</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ProjeList.map((Proje) => (
                <StyledTableRow key={Proje.id}>
                  <StyledTableCell >{Proje.id}</StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                  <Image src={`/${Proje?.img}`} width={400} height={300}style={{ maxWidth: '100%', maxHeight: '100%' }} />
                  </StyledTableCell>
                  <StyledTableCell align="center">{Proje.title}</StyledTableCell>
                  <StyledTableCell align="center">{Proje.description}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Fab color="inherit" aria-label="edit" onClick={() => handleCardClick(Proje)}>
                      <EditIcon />
                    </Fab>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <IconButton aria-label="delete" size="large" onClick={() => handleDelete(Proje.id)}>
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Modal
        open={Boolean(selectedProje)}
        onClose={handleCloseModal}
        aria-labelledby="proje-modal"
        aria-describedby="proje-modal-description"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ overflow: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '20px' }}>
        <div style={{ overflow: 'auto', padding: '20px', display: 'flex', alignItems: 'center' }}>
          <Typography variant="h5" gutterBottom style={{ opacity: '1.0', marginRight: '90px' }}>
            {selectedProje?.title}   # {selectedProje?.id}
          </Typography>          
          <IconButton aria-label="upload" size="large" onClick={handleUpdate} >
            <UploadIcon fontSize="large" htmlColor='#0066ff'/>
          </IconButton>
        </div>
          <Image src={`/${selectedProje?.img}`} width={400} height={300}style={{ maxWidth: '100%', maxHeight: '100%' }} />
          <TextField
            label="Başlık"
            variant="outlined"
            fullWidth
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <TextField
            label="Açıklama"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
        </div>
      </Modal>  
      </Box> 
    </>
  );
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
