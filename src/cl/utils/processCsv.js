const fs = require('fs');
const csvParser = require('csv-parser');
const { formatName } = require('./formatters');
const { csvWriter } = require('./writeCsv');
const { log, table } = require('console');

function process(csv) {

  const newFile = [];
  let cohort;

  // Create a readable stream from the CSV file
  const readableStream = fs.createReadStream(csv);

  // Parse CSV data using csv-parser
  readableStream.pipe(csvParser({ skip: 1 })).on('data', (row) => {

      // Access values by column name
      const fullName = Object.values(row)[0];
      const email = Object.values(row)[1];
      
      cohort = fullName.split(' ')[0];

      newFile.push({    
        'user_email (required)': email, 
        'first_name (required)': formatName(fullName)[0], 
        'last_name (required)': formatName(fullName)[1],
      });
    })
    .on('end', () => {
      table(newFile);
      // log(newFile);
      
      log(' ');
      log(`Total: ${newFile.length} pessoas`)
      log(' ');

      log('===========================================');
      log('           CSV parsing complete!           ');
      log('===========================================');

      csvWriter(cohort, newFile);
    });

    return newFile;
}

module.exports = { process };
