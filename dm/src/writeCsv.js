const fs = require('fs');

function csvWriter(newFile, index) {

    const headers = [ 'name', 'email', 'phone_number' ];

    const csvContent = [headers, ...newFile.map((obj) => headers.map((key) => obj[key]))]
      .map((row) => row.join(','))
      .join('\n');

    fs.writeFile(`Base Pessoas - DM-T${index + 1} formatado.csv`, csvContent, (err) => {
      if (err) {
        console.error('Error writing CSV file:', err);
      } else {
        console.log('CSV file written successfully!');
      }
    });
}

module.exports = { csvWriter };