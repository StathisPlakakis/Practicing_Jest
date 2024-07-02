function capitalize(input) {
  if (!input) return '';
  return input.charAt(0).toUpperCase() + input.slice(1);
}

function reverseString(input) {
  return input.split('').reverse().join('');
}

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    return a / b;
  }

  multiplication(a, b) {
    return a * b;
  }
}

function caesarCipher(string, key) {
  let result = '';
  const lowerCaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const upperCaseAlphabet = lowerCaseAlphabet.map(char => char.toUpperCase());
  let newlowerCaseAlphabet = [...lowerCaseAlphabet];
  for (let i = 0; i < key; i++) {
      const char = newlowerCaseAlphabet.shift();
      newlowerCaseAlphabet.push(char);
    }
  const newupperCaseAlphabet = newlowerCaseAlphabet.map(char => char.toUpperCase());
  for (let i = 0; i < string.length; i++) {
    const char = string.charAt(i);
    const indexOfCharinLower = lowerCaseAlphabet.indexOf(char);
    const indexOfCharinUpper = upperCaseAlphabet.indexOf(char);
    if (indexOfCharinLower !== -1) {
      result += newlowerCaseAlphabet[indexOfCharinLower];
    }else if (indexOfCharinUpper !== -1) {
      result += newupperCaseAlphabet[indexOfCharinUpper];
    }else {
      result += char;
    }
    
  }
  return result;
}

export {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher
}