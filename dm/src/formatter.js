function formatter(str1, str2) {
  // Process the first string
  const parts1 = str1.split('-');
  const prefix1 = parts1[0].toUpperCase();
  const month1 = parts1[2].charAt(0).toUpperCase() + parts1[2].slice(1);
  const formattedStr1 = `[${prefix1}-${month1}]`;
  
  // Process the second string
  const words2 = str2.split(' ');
  const capitalizedWords2 = words2.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  const formattedStr2 = capitalizedWords2.join(' ');
  
  // Return the combined formatted strings
  return `${formattedStr1} ${formattedStr2}`;
}

module.exports = { formatter };
