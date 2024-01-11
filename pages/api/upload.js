// pages/api/upload.js

import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).end(); // Method Not Allowed
    }

    const form = new IncomingForm();
    form.uploadDir = path.join(process.cwd(), 'public/pic'); // Set the upload directory

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Error parsing form:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      const fileName = files.file && files.file.name ? files.file.name : 'defaultFileName';
      const oldPath = files.file.path;
      const newPath = path.join(process.cwd(), 'public/pic', fileName);

      fs.renameSync(oldPath, newPath);

      return res.status(200).json({
        success: true,
        imagePath: `/pic/${fileName}`,
      });
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
