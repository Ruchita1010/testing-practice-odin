import {
  capitalizeFirstLetter,
  reverseString,
} from '../js_modules/stringManip';

describe('String Manipulation', () => {
  const string = 'hello';
  const reversedString = 'olleh';

  it('Should capitalize first letter of a string', () => {
    expect(capitalizeFirstLetter(string)).toMatch(/^[A-Z]\S+/);
  });

  it('Should reverse a string', () => {
    expect(reverseString(string)).toMatch(reversedString);
  });
});
