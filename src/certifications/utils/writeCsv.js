const fs = require('fs');

function csvWriter(newFile, cohort) {

  const headers = [
    'recipent_name',
    'recipient_email',
    'issue_date',
    'expiry_date',
    'Data de Emissao',
    'fieldOfStudy',
    'endYear',
    'startYear',
    'Pais',
    'Horas',
];

  headers.forEach(() => {

    const csvContent = [
      headers, 
      ...newFile.map((obj) => [
        obj['recipent_name'], 
        obj['recipient_email'], 
        obj['issue_date'],
        obj['expire_date'],
        obj['Data de Emissao'],
        obj['fieldOfStudy'],
        obj['endYear'],
        obj['startYear'],
        obj['Pais'],
        obj['Horas'],
      ])
    ].map((row) => row.join(',')).join('\n');

    fs.writeFile(`${cohort}-Accredible.csv`, csvContent, (err) => {
      if (err) {
        console.error('Error writing CSV file:', err);
      } else {
        console.log('CSV file written successfully!');
      }

    });

  })
}

module.exports = { csvWriter };
