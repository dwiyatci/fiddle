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

// describe('a test suite', async () => {
//   const theAnswer = await Promise.resolve(42);
//
//   test('a test case', () => {
//     expect(theAnswer + 1).toEqual(43);
//   });
//
//   test('another test case', () => {
//     expect(theAnswer + -1).toEqual(41);
//   });
// });

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

test('testEnvironmentOptions', () => {
  expect(global.theAnswer).toEqual(42);
  expect(globalThis.theAnswer).toEqual(42);
  expect(global.foo).toEqual('43');
});

describe('simple arithmetics', () => {
  console.log('before all');

  test('1 + 1', () => {
    expect(1 + 1).toEqual(2);
    console.log('hi');
  });

  test('1 + 2 (async)', async () => {
    const out = await new Promise((r) => setTimeout(() => r(1 + 1), 500));
    expect(out).toEqual(2);
    console.log('ho');
  });

  test('2 + 3', () => {
    expect(2 + 3).toEqual(5);
    console.log('ha');
  });

  console.log('after all');
});
