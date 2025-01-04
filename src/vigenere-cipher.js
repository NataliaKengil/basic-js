const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(shouldReverse = true) {
      this.shouldReverse = shouldReverse;
    }
  
    encrypt(messageE, key) {
      if (!messageE || !key) throw new Error("Incorrect arguments!");     
      messageE = messageE.toUpperCase();
      key = key.toUpperCase();
      let result = '';
      let keyIndex = 0;
  
      for (let i = 0; i < messageE.length; i++) {
        const charCode = messageE.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
          const originalCharacterIndex = charCode - 65;
          const keyIndexValue = key.charCodeAt(keyIndex % key.length) - 65;
          const encryptedCharacter = String.fromCharCode(((originalCharacterIndex + keyIndexValue) % 26) + 65);
          result += encryptedCharacter;
          keyIndex++;
        } else {
          result += messageE[i];
        }
      }
      return this.shouldReverse ? result : result.split('').reverse().join('');
    }
  
    decrypt(messageD, key) {
      if (!messageD || !key) throw new Error("Incorrect arguments!");  
      messageD = messageD.toUpperCase();
      key = key.toUpperCase();
      let result = '';
      let keyIndex = 0;
  
      for (let i = 0; i < messageD.length; i++) {
        const charCode = messageD.charCodeAt(i);    
        if (charCode >= 65 && charCode <= 90) {
          const encryptedIndex = charCode - 65;
          const keyIndexValue = key.charCodeAt(keyIndex % key.length) - 65;
          const decryptedCharacter = String.fromCharCode((encryptedIndex - keyIndexValue + 26) % 26 + 65);
          result += decryptedCharacter;
          keyIndex++;
        } else {
          result += messageD[i];
        }
      } 
      return this.shouldReverse ? result : result.split('').reverse().join('');
    }
  }
  
  module.exports = {
    VigenereCipheringMachine,
  };
