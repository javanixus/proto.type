import aes from 'crypto-js/aes';
import latin from 'crypto-js/enc-latin1';

export default {
    data: () => ({
        bgArray:[
            '/images/card2.png',
            '/images/card3.png',
            '/images/card4.png',
            '/images/card5.png',
            '/images/card6.png',
            '/images/card7.png',
            '/images/card8.png',
        ],
    }),
    methods: {
        postData() {
            let _vm = this
            let _l =  window.localStorage
            let _cs = console
            let _r = this.bgArray[Math.floor(Math.random() * this.bgArray.length)]
            var cryptobject = aes.encrypt(_vm.datas.projectTitle, _vm.datas.secretPharse);
            _vm.encrypted = {
                key: cryptobject.key + '', // don't send _vm
                iv: cryptobject.iv + '', // don't send _vm
                salt: cryptobject.salt + '', // don't send _vm
                ciphertext: cryptobject.ciphertext + '', // don't send _vm
                str: cryptobject + '' // send or store _vm
            }
            _vm.dataPharse = _vm.encrypted.str
            _l.setItem('str', _vm.dataPharse)
            _cs.log(_vm.dataPharse)

            _vm.$store.commit('addProject',{
                headline: '28 days again',
                title: _vm.datas.projectTitle,
                desc: _vm.datas.projectDesc,
                bg: _r,
                status: 'done'
            })
            _vm.datas.projectTitle = ''
            _vm.datas.projectDesc = ''
        },
        getData() {
            let _vm = this
            let _l =  window.localStorage
            let _cs = console
            _vm.datas.output = aes.decrypt(_l.getItem('str'), _vm.datas.secretPharse).toString(latin)
            _cs.log(_vm.datas.output)
            _vm.datas.dataFlow = 1
            _vm.$modal.hide('create-project')
            _vm.$store.state.items.length >= 1 ? _vm.$store.commit('validateProject',true) : _vm.$store.commit('validateProject',false)
        },
    }
}