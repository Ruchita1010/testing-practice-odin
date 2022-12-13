import analyzeArray from '../js_modules/analyzeArray';

describe('Analyze array', () => {
  const array = [1, 8, 3, 4, 2, 6];

  it('Should analyze array and return an object with properties: avg, min, max, len', () => {
    expect(analyzeArray(array)).toMatchObject({
      average: expect.any(Number),
      min: expect.any(Number),
      min: expect.any(Number),
      length: expect.any(Number),
    });
  });
});
