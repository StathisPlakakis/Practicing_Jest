import capitalize from "./functions";

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
})