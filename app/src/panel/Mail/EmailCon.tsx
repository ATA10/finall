'use client'
import React, { useState } from 'react'; 
import { Box, Button, Typography } from'@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import deleteIcon from '@mui/icons-material/Delete';

import Ekle from'./MailEkle';

interface Emailss {
  id: number;
  name: string;
  email: string;
  durum: string;
}
interface EmailConProps {
  AddEmail: (newEmail: Emailss) => void;
  emaillist: Emailss[];
  setemaillist: React.Dispatch<React.SetStateAction<Emailss[]>>;
}
export default function EmailCon({ AddEmail, emaillist, setemaillist }: EmailConProps) {
    const [mailSent, setemaillis] = useState(false);
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');

    const emailGonder = async () => {
        try {
          const response = await fetch('/api/mail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ subject, text }),
          });
    
          if (response.ok) {
            console.log('Mail başarıyla gönderildi.');
            const updatedEmailList = emaillist.map((email) => {
              if (email.durum === 'false') {
                return { ...email, durum: 'true' };
              }
              return email;
            });
      
            // TODO: Set the updated email list to your state (setemaillist)
            setemaillist(updatedEmailList);
          } else {
            console.error('Mail gönderirken bir hata oluştu.');
          }
        } catch (error) {
          console.error('API isteği sırasında bir hata oluştu:', error);
        }
      };

      const EmailSil = async (silinecekID : number) => {
        try {
          // Silinen ürünü yerel state içinden filtrele
          const updatedmailList = emaillist.filter((mail) => mail.id !== silinecekID);
    
          // TODO: Yerel state'i güncelle
          setemaillist(updatedmailList);
    
          // API'ye POST isteği gönderme
          const response = await fetch('/api/Serveremail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedmailList),
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
    
      return(
        <>
        <Box sx={{ height: '5vh' }} id ="mail"/>
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >
        <Typography variant="h2" gutterBottom>
            EMAİL
        </Typography>
        <Ekle AddEmail={AddEmail} maillist={emaillist} />
        </Box>
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '30ch' },
            }}
            noValidate
            autoComplete="off"            
            >
            <div>
                <TextField
                id="baslika"
                label="BAŞLIK"
                multiline
                rows={4}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                />
            </div>
            <div>
                <TextField
                id="texta"
                label="İÇERİK"
                multiline
                rows={4}
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div>
                <Button variant="outlined" onClick={emailGonder}>
                Gönder <SendIcon />
                </Button>
            </div>
            {mailSent && <p>E-posta başarıyla gönderildi!</p>}
            </Box> 
            <Box>
            <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 550 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align="center">id</TableCell>
                    <TableCell align="center">isim&nbsp;</TableCell>
                    <TableCell align="center">email&nbsp;</TableCell>
                    <TableCell align="center">işlem&nbsp;</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {emaillist.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    style={{ backgroundColor: row.durum === 'true' ? 'rgba(144, 238, 144, 0.5)' : 'transparent' }}
                  >
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="outlined"
                        onClick={() => EmailSil(row.id)}
                      >
                        Sil
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </TableContainer>
            </Box>
        </Box>
        <Box sx={{ height: '30vh' }} />
        </>
      );
}