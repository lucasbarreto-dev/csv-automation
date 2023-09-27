function formatName(Cohort, fullName) {
  // Process the first string
  const parts1 = Cohort.split('-');
  const prefix1 = parts1[0].toUpperCase();
  const prefix2 = parts1[1][0].toUpperCase() + parts1[1][1] + parts1[1][2];
  const month1 = parts1[2].charAt(0).toUpperCase() + parts1[2].slice(1);
  const formattedCohort = `[${prefix1}-${prefix2}-${month1}]`;
  
  // Process the second string
  const words2 = fullName.split(' ');
  const capitalizedWords2 = words2.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  const formattedfullName = capitalizedWords2.join(' ');
  
  // Return the combined formatted strings
  return `${formattedCohort} ${formattedfullName}`;
}

function formatPhoneNumber(phoneNumber) {
  // Remove any non-digit characters from the phone number
  const digitsOnly = phoneNumber.replace(/\D/g, '');
  
  // Add the country code and return the formatted number
  return '+55' + digitsOnly;
}

function formatCohort(cohort) {
  const capitalizedLetter = cohort.split('-')[2].charAt(0).toUpperCase();
  const followingLetters = cohort.split('-')[2].slice(1);

  return capitalizedLetter + followingLetters; 
}

function formatProgram(program) {
  return program.split('-')[0].toUpperCase();
}

module.exports = { 
  formatName, 
  formatPhoneNumber,
  formatCohort, 
  formatProgram,
};
