import aes from 'crypto-js/aes'
import latin from 'crypto-js/enc-latin1'
import {
    bg,
    status
} from './../api/project'

export default {
    methods: {
        postData(res) {
            let _l = window.localStorage
            let _cs = console
            let _r = bg[Math.floor(Math.random() * bg.length)]
            let _h = status[Math.floor(Math.random() * status.length)]
            var cryptobject = aes.encrypt(res.projectTitle, res.secretPharse);
            var encrypted = {
                str: cryptobject + '' // send or store this
            }
            var dataPharse = encrypted.str
            _l.setItem('str', dataPharse)
            _cs.log(dataPharse)
            this.$store.dispatch('project/addProject', {
                headline: '28 days again',
                title: res.projectTitle,
                desc: res.projectDesc,
                bg: _r,
                status: _h,
                key: dataPharse
            })
        },
        getData(data, val) {
            let _l = window.localStorage
            let _cs = console
            data.output = aes.decrypt(_l.getItem('str'), data.secretPharse).toString(latin)
            _cs.log(data.output)
            data.dataFlow = 1
            this.$modal.hide(val)
            this.$store.state.project.items.length >= 1 ? this.$store.dispatch('project/validateProject', true) : this.$store.dispatch('project/validateProject', false)
        },
    }
}