const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

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

// E-posta gönderme endpoint'i
app.get('/send-emails', async (req, res) => {
  try {
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

    res.status(200).json({ message: 'E-postalar başarıyla gönderildi.' });
  } catch (error) {
    console.error('E-posta gönderme hatası:', error);
    res.status(500).json({ message: 'Bir hata oluştu.' });
  }
});

app.listen(port, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${port}`);
});
