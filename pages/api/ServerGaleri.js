const fs = require('fs');
import path from 'path';

export default function handler(req, res) {
  // Gelen veriyi burada işleyebilirsiniz
  const data = req.body; 

  // Projeler dosyasını güncelleyin
  const filePath ="public/data/Galeri.json" 
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  // Başarıyla güncellendiğine dair bir yanıt gönderin
  res.status(200).json(data);
}
