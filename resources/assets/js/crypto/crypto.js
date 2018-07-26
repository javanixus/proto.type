import aes from 'crypto-js/aes'
import latin from 'crypto-js/enc-latin1'
import { bg,status } from './../api/project'

export default {
    methods: {
        postData() {
            let _vm = this
            let _l =  window.localStorage
            let _cs = console
            let _r = bg[Math.floor(Math.random() * bg.length)]
            let _h = status[Math.floor(Math.random() * status.length)]
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
            // _vm.$store.dispatch('addProject',{
            //     headline: '28 days again',
            //     title: _vm.datas.projectTitle,
            //     desc: _vm.datas.projectDesc,
            //     bg: _r,
            //     status: _h
            // })
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
            _vm.$store.state.items.length >= 1 ? _vm.$store.dispatch('validateProject',true) : _vm.$store.dispatch('validateProject',false)
        },
    }
}