const fs = require('fs');
const csvParser = require('csv-parser');
const { formatter } = require('./formatter');
const { csvWriter } = require('./writeCsv');
const { log, table } = require('console');

function process(csv, index) {

  const newFile = [];

  // Create a readable stream from the CSV file
  const readableStream = fs.createReadStream(csv);

  // Parse CSV data using csv-parser
  readableStream.pipe(csvParser({ skip: 1 })).on('data', (row) => {

      // Access values by column name
      const cohort = Object.values(row)[0];
      const fullName = Object.values(row)[1];
      const email = Object.values(row)[2];
      const telefone = Object.values(row)[3];

      newFile.push({ cohort , name: formatter(cohort, fullName), email, telefone });
    })
    .on('end', () => {
      table(newFile);
      // log(newFile);
      log('===========================================');
      log('           CSV parsing complete!           ');
      log('===========================================');

      csvWriter(newFile, index);
    });

    return newFile;
}

module.exports = { process };
