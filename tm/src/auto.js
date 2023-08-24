const fs = require('fs');
const path = require('path');
const { process } = require('../../utils/processCsv'); 
const { log, error } = require('console');

// Get the directory path where the CSV files are located
const directoryPath = path.resolve(__dirname, '../csv');

function auto() {
  // Read the contents of the directory
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
        error('Error reading directory:', err);
        return;
    }

    // Loop through each file in the directory
    files.forEach(async (file, index) => {
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
          log('ITERATION: ', index + 1);
      });

      log('FILE: ', file)

    });
  });
}

auto();

module.exports = { auto };
