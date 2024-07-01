function capitalize(input) {
  if (!input) return '';
  return input.charAt(0).toUpperCase() + input.slice(1);
}

function reverseString(input) {
  return input.split('').reverse().join('');
}

export {
  capitalize,
  reverseString
}