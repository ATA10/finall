const fs = require('fs');
import path from 'path';

export default function handler(req, res) {
  // Gelen veriyi burada işleyebilirsiniz
  const data = req.body; // Örnek: { name: 'New Project' }

  // Projeler dosyasını güncelleyin
  const filePath ="public/data/email.json" // Dosya yolu düzeltildi
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  // Başarıyla güncellendiğine dair bir yanıt gönderin
  res.status(200).json(data);
}
