const fs = require('fs');
const path = require('path');
const { process } = require('./processCsv'); 
const { log, error } = require('console');
const readline = require('readline-sync');


function auto(directoryPath) {
  // Read the contents of the directory
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
        error('Error reading directory:', err);
    }

    files.slice(1).forEach(async (file, index) => {
      const filePath = path.join(directoryPath, file);

      // Check if the file is a regular file
      fs.stat(filePath, (err, stats) => {
          if (err) {
              error('Error checking file status:', err);
          }

          if (stats.isFile()) {
            if (file === '.DS_Store') {
                log('Skipped .DS_Store file:', file);
            } else if (file.endsWith('Phone.csv')) {
                log('Skipped file:', file);
            } else if (file.endsWith('Email.csv')) {
                process(filePath);
            }
            // file.endsWith('Email.csv') ? process(filePath) : log('Skipped file:', file);
          }          
        log('ITERATION: ', index + 1);
      });
      log('FILE: ', file)
    });
  });
}

module.exports = { auto };
