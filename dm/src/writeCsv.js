const fs = require('fs');

function csvWriter(newFile, index) {

  const csvContent1 = [['Name', 'Email'], ...newFile.map(obj => [obj.Name, obj.Email])]
  .map(row => row.join(','))
  .join('\n');

  const csvContent2 = [['Name', 'Phone'], ...newFile.map(obj => [obj.Name, obj.Phone])]
    .map(row => row.join(','))
    .join('\n');

  fs.writeFile(`Base Pessoas - DM-T${index + 1} Email.csv`, csvContent1, (err) => {
    if (err) {
      console.error('Error writing CSV file:', err);
    } else {
      console.log('Email CSV file written successfully!');
    }
  });

  fs.writeFile(`Base Pessoas - DM-T${index + 1} Phone.csv`, csvContent2, (err) => {
    if (err) {
      console.error('Error writing CSV file:', err);
    } else {
      console.log('Phone CSV file written successfully!');
    }
  });
}

module.exports = { csvWriter };
