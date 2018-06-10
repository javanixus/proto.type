import aesjs from 'crypto-js/aes';
import pbkdf2 from 'crypto-js/pbkdf2';

export default class {
    encrypt (stringToEncrypt){
        // let textBytes = aesjs.utils.utf8.toBytes(stringToEncrypt)
        // let aesCtr = new aesjs.ModeOfOperation.ctr(this.key_256, new aesjs.Counter(5))
        // let encryptedBytes = aesCtr.encrypt(textBytes)

        // return aesjs.utils.hex.fromBytes(encryptedBytes)
        var salt = CryptoJS.lib.WordArray.random(128/8); 
        var key256Bits = CryptoJS.PBKDF2(stringToEncrypt, salt, { keySize: 256/32 });

    }
    // decrypt (stringToDecrypt){
    //     let encryptedBytes = aesjs.utils.hex.toBytes(stringToDecrypt);
    //     let aesCtr = new aesjs.ModeOfOperation.ctr(this.key_256, new aesjs.Counter(5))
    //     let decryptedBytes = aesCtr.decrypt(encryptedBytes);

    //     return aesjs.utils.utf8.fromBytes(decryptedBytes);
    // }
}