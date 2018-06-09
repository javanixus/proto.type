import aesjs from 'aes-js';
import pbkdf2 from 'pbkdf2';

export default class {
    // membuat base construksi hash encrypt
    constructor (encryptionKey){
        this.csrfToken = window.Laravel.csrfToken;
        this.encryptionKey = encryptionKey;
        // base hex = 8
        this.key_256 = pbkdf2.pbkdf2Sync(this.encryptionKey, this.csrfToken, 1, 256/8, 'sha512')
    }
    // encrypt base call args to encrypt
    encrypt (stringToEncrypt){
        let textBytes = aesjs.utils.utf8.toBytes(stringToEncrypt)
        let aesCtr = new aesjs.ModeOfOperation.ctr(this.key_256, new aesjs.Counter(5))
        let encryptedBytes = aesCtr.encrypt(textBytes)

        return aesjs.utils.hex.fromBytes(encryptedBytes)
    }
    decrypt (stringToDecrypt){
        let encryptedBytes = aesjs.utils.hex.toBytes(stringToDecrypt);
        let aesCtr = new aesjs.ModeOfOperation.ctr(this.key_256, new aesjs.Counter(5))
        let decryptedBytes = aesCtr.decrypt(encryptedBytes);

        return aesjs.utils.utf8.fromBytes(decryptedBytes);
    }
}