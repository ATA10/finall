// const fs = require('fs');
// import path from 'path';

// export default function handler(req, res) {
//   // Gelen veriyi burada işleyebilirsiniz
//   const data = req.body; // Örnek: { name: 'New Project' }

//   // Projeler dosyasını güncelleyin
//   const filePath ="public/data/Projeler.json" // Dosya yolu düzeltildi
//   fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

//   // Başarıyla güncellendiğine dair bir yanıt gönderin
//   res.status(200).json(data);
// }

import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    //return res.status(405).end(); // Method Not Allowed
    try {
      // Gelen veriyi burada işleyebilirsiniz
      const data = req.body; // Örnek: { name: 'New Project' }
  
      // Projeler dosyasını güncelleyin
      const filePath = path.join(process.cwd(), 'public/data/Projeler.json');
      await fs.writeFile(filePath, JSON.stringify(data, null, 2));
  
      // Başarıyla güncellendiğine dair bir yanıt gönderin
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Dosya güncelleme hatası:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  try {
    const filePath = path.join(process.cwd(), 'public/data/Projeler.json');
    const existingData = await fs.readFile(filePath, 'utf-8');
    const parsedData = JSON.parse(existingData);

    const updatedProjeData = req.body;

    // Find and update the specific proje based on its id
    const updatedData = parsedData.map((proje) =>
      proje.id === updatedProjeData.id ? { ...proje, ...updatedProjeData } : proje
    );

    // Write the updated data back to the file
    await fs.writeFile(filePath, JSON.stringify(updatedData, null, 2));

    // Respond with a success message
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}