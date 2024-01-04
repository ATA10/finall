import fs from 'fs';

export default (req, res) => {
  try {
    // // Read the Projeler.js file
    // const projelerPath = '../../data/Projeler';
    // const projeler = require(projelerPath);

    // // Add a new item to ProjectList array
    // projeler.ProjectList.push({ name: 'New Project' });

    // // Save the updated Projeler.js file
    // fs.writeFileSync(projelerPath, module.exports = ${JSON.stringify(projeler, null, 2)};);

    res.status(200).json({ message: 'ProjectList updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};