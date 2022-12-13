const isLetter = (char) => {
  return /[a-zA-Z]/.test(char);
};

const caesarCipher = (message, key) => {
  const encryptedLettersArray = [...message].map((char) => {
    let asciiValue;
    if (isLetter(char)) {
      /* Store the ASCII value of letter 'A' as per the case of the char
        ASCII of 'A' = 65 and 'a' = 97 */
      asciiValue = char === char.toUpperCase() ? 65 : 97;

      /* convert char ASCII to index ranging from 0-25 ('a'=0, 'b'=1, ...'z'=25) 
        by subtracting the ASCII of letter A/a as per the case of char */
      const charIndex = char.charCodeAt(0) - asciiValue;

      // apply the shift to char (encrypting)
      const encrytedValue = (charIndex + key) % 26;

      /* convert the encryptedValue to its correct ASCII
        and then convert the ASCII back to a letter */
      return String.fromCharCode(encrytedValue + asciiValue);
    }
    // any char other than letter, returned as it is!
    return char;
  });
  // convert to a string
  return encryptedLettersArray.join('');
};

export default caesarCipher;
