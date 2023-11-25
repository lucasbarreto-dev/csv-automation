const fs = require('fs');

function csvWriter(cohort, newFile) {

  const headers = ['user_email (required)', 'first_name (required)', 'last_name (required)'];

  headers.forEach(() => {

    const csvContent = [
      headers, 
      ...newFile.map((obj) => [obj['user_email (required)'], obj['first_name (required)'], obj['last_name (required)']])
    ].map((row) => row.join(',')).join('\n');

    fs.writeFile(`${cohort}.csv`, csvContent, (err) => {
      if (err) {
        console.error('Error writing CSV file:', err);
      } else {
        console.log('CSV file written successfully!');
      }

    });

  })
}

module.exports = { csvWriter };
