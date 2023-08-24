const fs = require('fs');

function csvWriter(newFile, index) {

  const headers = Object.keys(newFile[0]);
  const cohort = Object.values(newFile[0])[0].split('-')[0].toUpperCase();

  headers.slice(1).forEach((key, i) => {
    if (i > 0) {
      const csvContent = [['Name', key], ...newFile.map((obj) => [obj.Name, obj[key]])]
      .map((row) => row.join(','))
      .join('\n');

      fs.writeFile(`[${cohort}]-T${index + 1} ${key}.csv`, csvContent, (err) => {
        if (err) {
          console.error('Error writing CSV file:', err);
        } else {
          console.log('Email CSV file written successfully!');
        }
      });
    }
  })
}

module.exports = { csvWriter };
