import caesarCipher from '../js_modules/caesarCipher';

describe('CaesarCipher', () => {
  it('Should wrap from "z" to "a"', () => {
    expect(caesarCipher('zebras in the wild', 1)).toMatch('afcsbt jo uif xjme');
  });

  it('Should keep the case same', () => {
    expect(caesarCipher('The stars in your Milky Way', 3)).toMatch(
      'Wkh vwduv lq brxu Plonb Zdb'
    );
  });

  it('Should keep the punctuation', () => {
    expect(
      caesarCipher("I'm asking myself again, am I happy right now?", 5)
    ).toMatch("N'r fxpnsl rdxjqk flfns, fr N mfuud wnlmy stb?");
  });
});
