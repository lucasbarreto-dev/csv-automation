function formatName(fullName) {
  const firstName = fullName.split(' ')[1];
  const lastName = fullName.split(' ')[fullName.split(' ').length - 1];

  return [firstName, lastName];
}

function formatCohort(cohort) {
  const capitalizedLetter = cohort.split('-')[2].charAt(0).toUpperCase();
  const followingLetters = cohort.split('-')[2].slice(1);

  return capitalizedLetter + followingLetters; 
}

module.exports = { 
  formatName, 
  formatCohort, 
};
