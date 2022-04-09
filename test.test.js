describe('a test suite', () => {
  test('a test case', () => {
    // given
    const notTheAnswer = 43;

    // when
    const theAnswer = notTheAnswer + -1;

    // then
    expect(theAnswer).toEqual(42);
  });
});
