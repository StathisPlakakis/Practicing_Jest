import {
  capitalize,
  reverseString
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
    // {
    //   receivedFirst: 4,
    //   receivedSecond: 15,
    //   expected: 19
    // },
    // {
    //   receivedFirst: -3,
    //   receivedSecond: 5,
    //   expected: 2
    // }
  ]
  testCases.forEach(testCase => {
    expect(new Calculator().add(testCase.receivedFirst, testCase.receivedSecond)).toBe(testCase.expected);
  })
})