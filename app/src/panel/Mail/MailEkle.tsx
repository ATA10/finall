import React, { ChangeEvent, useState } from 'react';
import { IconButton, Modal, Typography, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/AddCircleSharp';

interface Emailss {
  id: number;
  name: string;
  email: string;
  durum: string;
}

interface EkleProps {
  AddEmail: (newEmail: Emailss) => void; // Replace YourEmailType with the actual type of a single email item
  maillist: Emailss[]; // Replace YourEmailListType with the actual type of email list
}

export default function Ekle({ AddEmail, maillist }: EkleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [newmail, setNewmail] = useState({
    name: '',
    email: '',
    durum: 'false',
  });

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setNewmail({
      name: '',
      email: '',
      durum: 'false',
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewmail({
      ...newmail,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddmail = () => {
    const newmailItem = {
      id: Math.max(...maillist.map(item => item.id), 0) + 1,
      name: newmail.name,
      email: newmail.email,
      durum: newmail.durum,
    };

    AddEmail(newmailItem);
    setIsOpen(false);
    setNewmail({
      name: '',
      email: '',
      durum: 'false',
    });
  };

  return (
    <>
      <IconButton aria-label="add" color="secondary" onClick={handleOpen}>
        <AddIcon fontSize="large" />
      </IconButton>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="add-modal"
        aria-describedby="add-modal-mail"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ backgroundColor: 'white', padding: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Yeni mail Ekle
          </Typography>
          <TextField
            label="adı"
            variant="outlined"
            fullWidth
            value={newmail.name}
            onChange={handleInputChange}
            name="name"
          />
          <TextField
            label="mail"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={newmail.email}
            onChange={handleInputChange}
            name="email"
          />
          <Button variant="contained" onClick={handleAddmail}>
            Ekle
          </Button>
        </div>
      </Modal>
    </>
  );
}
