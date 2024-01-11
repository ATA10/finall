// Önce nodemailer kütüphanesini yükleyin
const nodemailer = require('nodemailer');

// JSON dosyasından e-posta adreslerini içeren bir örnek
import emailList from '../../public/data/email.json'

export default async function handler(req, res) {
    const { subject, text } = req.body;
  
    // Transporter oluşturun
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      auth: {
        user: 'dash.aniltaha@gmail.com', // Gmail hesabınızın kullanıcı adı
        pass: 'jtwe cubx soum llmh', // Gmail hesabınızın şifresi
      },
    });
  
    // E-posta içeriği
    const mailOptions = {
      from: 'dash.aniltaha@gmail.com', // Gönderen e-posta adresi
      subject: subject || 'Varsayılan Konu',
      text: text,
    };
  
    // Her e-posta adresine ayrı bir e-posta gönderin
    for (const { email } of emailList) {
      try {
        const info = await transporter.sendMail({ ...mailOptions, to: email });
        console.log(`Mail başarıyla gönderildi to: ${email}, messageId: ${info.messageId}`);
      } catch (error) {
        console.error(`Mail gönderme hatası to: ${email}, error:`, error);
      }
    }
  
    res.status(200).json({ success: true, message: 'Mailler başarıyla gönderildi.' });
  }
