import aes from 'crypto-js/aes';
import latin from 'crypto-js/enc-latin1';

export default {
    methods: {
        postData() {
            var cryptobject = aes.encrypt(this.datas.projectTitle, this.datas.secretPharse);
            this.encrypted = {
                key: cryptobject.key + '', // don't send this
                iv: cryptobject.iv + '', // don't send this
                salt: cryptobject.salt + '', // don't send this
                ciphertext: cryptobject.ciphertext + '', // don't send this
                str: cryptobject + '' // send or store this
            }
            this.dataPharse = this.encrypted.str
            window.localStorage.setItem('str', this.dataPharse)
            console.log(this.dataPharse)
        },
        getData() {
            this.datas.output = aes.decrypt(window.localStorage.getItem('str'), this.datas.secretPharse).toString(latin)
            console.log(this.datas.output)
        },
    }
}