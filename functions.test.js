import {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray
}
from "./functions";

test('Capitalize function', () => {
  const testCases = [
    {
      received: '',
      expected: ''
    },
    {
      received: 'aaaA',
      expected: 'AaaA'
    },
    {
      received: 'Hello',
      expected: 'Hello'
    },
    {
      received: 'what is going on?',
      expected: 'What is going on?'
    },
  ];
  testCases.forEach(testCase => {
    expect(capitalize(testCase.received)).toBe(testCase.expected);
  })
});

test('ReverseString function', () => {
  const testCases = [
    {
      received: '',
      expected: ''
    },
    {
      received: 'Hello',
      expected: 'olleH'
    },
    {
      received: 'Hello World !,$@',
      expected: '@$,! dlroW olleH'
    }
  ]
  testCases.forEach(testCase => {
    expect(reverseString(testCase.received)).toBe(testCase.expected);
  })
});

test('Calculator Addition', () => {
  const testCases = [
    {
      receivedFirst: 3,
      receivedSecond: 5,
      expected: 8
    },
    {
      receivedFirst: 4,
      receivedSecond: 15,
      expected: 19
    },
    {
      receivedFirst: -3,
      receivedSecond: 5,
      expected: 2
    }
  ]
  testCases.forEach(testCase => {
    expect(new Calculator()
          .add(testCase.receivedFirst, testCase.receivedSecond))
          .toBe(testCase.expected);
  })
})

test('Calculator Subtraction', () => {
  const testCases = [
    {
      receivedFirst: 10,
      receivedSecond: 10,
      expected: 0
    },
    {
      receivedFirst: 1,
      receivedSecond: 3,
      expected: -2
    },
    {
      receivedFirst: -10,
      receivedSecond: 10,
      expected: -20
    }
  ]
  testCases.forEach(testCase => {
    expect(new Calculator()
          .subtract(testCase.receivedFirst, testCase.receivedSecond))
          .toBe(testCase.expected)
  })
})

test('Calculator Division', () => {
  const testCases = [
    {
      receivedFirst: 5,
      receivedSecond: 5,
      expected: 1
    },
    {
      receivedFirst: 15,
      receivedSecond: 13,
      expected: 1.15
    },
    {
      receivedFirst: 32,
      receivedSecond: 523,
      expected: 0.06
    }
  ]
  testCases.forEach(testCase => {
    expect(new Calculator()
          .divide(testCase.receivedFirst, testCase.receivedSecond))
          .toBeCloseTo(testCase.expected);
  })
})

test('Calculator Multiplication', () => {
  const testCases = [
    {
      receivedFirst: 10,
      receivedSecond: 10,
      expected: 100
    },
    {
      receivedFirst: -1,
      receivedSecond: -3,
      expected: 3
    },
    {
      receivedFirst: -10,
      receivedSecond: 10,
      expected: -100
    }
  ]
  testCases.forEach(testCase => {
    expect(new Calculator()
          .multiplication(testCase.receivedFirst, testCase.receivedSecond))
          .toBeCloseTo(testCase.expected)
  })
})

test('Caesar Cipher Function', () => {
  const testCases = [
    {
      receivedString: 'xyz',
      receiveKey: 3,
      expected: 'abc'
    },
    {
      receivedString: 'HeLLo',
      receiveKey: 4,
      expected: 'LiPPs'
    },
    {
      receivedString: 'Hello, World!',
      receiveKey: 3,
      expected: 'Khoor, Zruog!'
    }
  ]
  testCases.forEach(testCase => {
    expect(caesarCipher(testCase.receivedString, testCase.receiveKey))
    .toBe(testCase.expected);
  })
})

test('Analize Array Function', () => {
  const testCases = [
    {
      received: [1,8,3,4,2,6],
      expected: {
        average: 4,
        min: 1,
        max: 8,
        length: 6
      }
    },
    {
      received: [11,3,8,3,4,2,6,9,-1],
      expected: {
        average: 5,
        min: -1,
        max: 11,
        length: 9
      }
    },
    {
      received: [1,2,-2],
      expected: {
        average: 0.33,
        min: -2,
        max: 2,
        length: 3
      }
    }
  ]
  testCases.forEach(testCase => {
    expect(analyzeArray(testCase.received).average).toBeCloseTo(testCase.expected.average);
    expect(analyzeArray(testCase.received).min).toEqual(testCase.expected.min);
    expect(analyzeArray(testCase.received).max).toEqual(testCase.expected.max);
    expect(analyzeArray(testCase.received).length).toEqual(testCase.expected.length);
  })
})