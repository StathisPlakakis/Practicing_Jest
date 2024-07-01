test('Capitalize function', () => {
  const testCases = [
    {
      input: '',
      expected: ''
    },
    {
      input: 'aaaA',
      expected: 'AaaA'
    },
    {
      input: 'Hello',
      expected: 'Hello'
    },
    {
      input: 'what is going on?',
      expected: 'What is going on?'
    },
  ];
  testCases.forEach(testCase => {
    const actual =  capitalize(testCase.input);
    expect(actual).toBe(testCase.expected);
  })
})