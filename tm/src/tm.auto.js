const fs = require('fs');
const path = require('path');
const { process } = require('./process.js'); // Assuming your processing function is defined in process.js
const { log, error } = require('console');

// Get the directory path where the CSV files are located
const directoryPath = path.resolve(__dirname, '../csv');

// Read the contents of the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
      error('Error reading directory:', err);
      return;
  }

  // Loop through each file in the directory
  files.slice(1).forEach(async (file, index) => {
    const filePath = path.join(directoryPath, file);

    // Check if the file is a regular file
    fs.stat(filePath, (err, stats) => {

        if (err) {
            error('Error checking file status:', err);
            return;
        }

        if (stats.isFile() && file.endsWith('.csv')) {
            process(filePath, index);
        }
        log('ITERATION: ', index);
    });

    log('FILE: ', file)

  });
});





