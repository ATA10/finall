// pages/api/upload.js
import multer from 'multer';

const upload = multer({ dest: 'public/pic/tema/' });

export default async function handler(req, res) {
  try {
    await new Promise((resolve) => {
      upload.single('file')(req, res, function (err) {
        if (err) {
          console.error('Multer Hatası:', err);
          return res.status(500).json({ error: err.message });
        }
        resolve();
      });
    });

    return res.status(200).json({ message: 'Dosya başarıyla yüklendi!' });
  } catch (error) {
    console.error('Sunucu Hatası:', error);
    return res.status(500).json({ error: 'Dosya yüklenirken bir hata oluştu.' });
  }
}
