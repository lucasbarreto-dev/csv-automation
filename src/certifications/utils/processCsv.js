const fs = require('fs');
const csvParser = require('csv-parser');
const { csvWriter } = require('./writeCsv');
const { log, table } = require('console');
const readline = require('readline-sync');

const issueDate = readline.question('Qual a issue date? <dd/mm/yy> ===> ');
log('                                      ');
// log('======================================');
const dataDeEmissao = readline.question('Qual a data de emissao? (dd de <mês> de <ano>) ===> ');

function process(csv) {

  const newFile = [];
  let cohort;

  // Create a readable stream from the CSV file
  const readableStream = fs.createReadStream(csv);

  // Parse CSV data using csv-parser
  readableStream.pipe(csvParser({ skip: 1 })).on('data', (row) => {

      // Access values by column name
      cohort = Object.values(row)[0].split(' ')[0]; 
      const fullName = Object.values(row)[0].split(' ').slice(1).join(' ');
      const recipientName = fullName.split(' ')[0] + ' ' + fullName.split(' ')[fullName.split(' ').length - 1];
      const email = Object.values(row)[1];

      newFile.push(
          { 
            recipent_name: recipientName, 
            recipient_email: email,
            issue_date: issueDate,
            expiry_date: '',
            'Data de Emissao': dataDeEmissao,
            fieldOfStudy: '',
            endYear: '',
            startYear: '',
            Pais: 'Brasil',
            Horas: '',
          });
    })
    .on('end', () => {
      log(' ')
      log('Cohort: ', cohort);
      table(newFile);
      // log(newFile);
      
      log(' ');
      log(`Total: ${newFile.length} pessoas`)
      log(' ');

      log('===========================================');
      log('           CSV parsing complete!           ');
      log('===========================================');

      csvWriter(newFile, cohort);
    });

    return newFile;
}

module.exports = { process };
