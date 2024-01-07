import multer from 'multer';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

// Dosyanın yükleneceği klasörü belirtin
const uploadFolder = path.join(process.cwd(), 'public/pic');

// Multer ayarları
const upload = multer({
  dest: uploadFolder,
  limits: {
    fileSize: 1024 * 1024 * 4, // 2 MB'yi geçmeyen dosyaları kabul et
  },
});

const uploadHandler = upload.single('file'); // 'file' form alanı adı

export default async function handler(req, res) {
  try {
    uploadHandler(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        // Multer hatası
        console.error('Multer hatası:', err);
        return res.status(500).json({ error: 'Dosya yüklenirken bir hata oluştu1.' });
      } else if (err) {
        // Diğer hatalar
        console.error('Dosya yüklenirken bir hata oluştu:', err);
        return res.status(500).json({ error: 'Dosya yüklenirken bir hata 1oluştu.' });
      }

      // Dosya yükleme başarılı
      const filePath = req.file.path.replace(/^public\//, '');
      return res.status(200).json({ success: true, filePath });
    });
  } catch (error) {
    console.error('API hatası:', error);
    return res.status(500).json({ error: 'Beklenmeyen bir hata oluştu.' });
  }
}
