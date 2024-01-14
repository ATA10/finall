// pages/api/tcmb.js
export default async function handler(req, res) {
    try {
      const response = await fetch('https://www.tcmb.gov.tr/kurlar/today.xml');
      const data = await response.text();      
      
      res.status(200).send(data);
    } catch (error) {
      console.error('Error fetching TCMB data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  