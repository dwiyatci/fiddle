describe('a test suite', () => {
  const theAnswer = 42;

  test('a test case', () => {
    expect(theAnswer + 1).toEqual(43);
  });

  test('another test case', () => {
    expect(theAnswer + -1).toEqual(41);
  });
});

describe('another test suite', () => {
  let theAnswer;
  beforeAll(() => {
    theAnswer = 42;
  });

  test('a test case', () => {
    expect(theAnswer + 1).toEqual(43);
  });

  test('another test case', () => {
    expect(theAnswer + -1).toEqual(41);
  });
});

describe('a test suite', async () => {
  const theAnswer = await Promise.resolve(42);

  test('a test case', () => {
    expect(theAnswer + 1).toEqual(43);
  });

  test('another test case', () => {
    expect(theAnswer + -1).toEqual(41);
  });
});

// describe('another test suite', () => {
//   let theAnswer;
//   beforeAll(async () => {
//     theAnswer = await Promise.resolve(42);
//   });
//
//   test('a test case', () => {
//     expect(theAnswer + 1).toEqual(43);
//   });
//
//   test('another test case', () => {
//     expect(theAnswer + -1).toEqual(41);
//   });
// });
