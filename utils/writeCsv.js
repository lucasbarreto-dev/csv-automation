const fs = require('fs');
const { formatCohort, formatProgram } = require('./formatters');

function csvWriter(newFile, index) {

  const program = formatProgram(Object.values(newFile[0])[0]);
  const cohort = formatCohort(Object.values(newFile[0])[0]);

  const headers = Object.keys(newFile[0]);

  headers.slice(1).forEach((key, i) => {
    if (i > 0) {
      const csvContent = [
        ['Name', key], ...newFile.map((obj) => [obj.Name, obj[key]])
    ].map((row) => row.join(',')).join('\n');

      fs.writeFile(`[${program}]-T0${index + 1} ${cohort} ${key}.csv`, csvContent, (err) => {
        if (err) {
          console.error('Error writing CSV file:', err);
        } else {
          console.log('CSV file written successfully!');
        }

      });
    }
  })
}

module.exports = { csvWriter };
