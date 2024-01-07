'use client'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect } from 'react';
import nodemailer from 'nodemailer';

import { fetchData } from '../../../pages/api/utils';

export default function Pages() {
    const [emaillist, setemailList] = useState([]);

    useEffect(() => {
      fetchData('email').then((data) => {
        setemailList(data);
      });
    }, []);
    useEffect(() => {
        const sendBulkEmails = async () => {
          // E-posta gönderme konfigürasyonu
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'your-email@gmail.com',
              pass: 'your-email-password',
            },
          });
    
          // Toplu e-posta listesi
          const emailList = ['email1@example.com', 'email2@example.com'];
    
          // E-posta gönderme işlemi
          for (const email of emailList) {
            const mailOptions = {
              from: 'your-email@gmail.com',
              to: email,
              subject: 'Toplu E-posta Başlığı',
              text: 'Toplu E-posta İçeriği',
            };
    
            await transporter.sendMail(mailOptions);
            console.log(`E-posta gönderildi: ${email}`);
          }
        };
    
        sendBulkEmails();
      }, []);
  return (
    <React.Fragment>
      <CssBaseline style={{ backgroundImage: 'linear-gradient(122deg, #ffffff 0%, #cccccc 100%)' }}/>   
      <div>
        asd
      </div>

    </React.Fragment>
  );
}