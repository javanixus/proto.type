<template>
    <div class="start__header">
        <img src="/images/proto.type-logo-primary.svg" alt="">
        <p>United we stand divided we fall 👏</p>
        <div class="start__header--desc">
            <span>Hello, welcome to proto.type. Now follow the steps to start your awesome journey.</span>
        </div>
        <div class="start__content">
            <form action="">
                <div class="formBlock">
                    <div class="formBlock__inner marginBottom-s">
                        <label for="SetupFirstName">Name</label>
                        <div class="formBlock--inline">
                            <input v-model="setup.firstName" name="first-name"  autocomplete="name" @focus="$event.target.select()" v-validate="'required|alpha'" type="text" :class="{ 'input': true, 'input-danger': errors.has('SetupFirstName')}"
                                id="SetupFirstName" placeholder="First name" class="input input--primary">
                            <input v-model="setup.lastName" name="last-name" autocomplete="name" v-validate="'required|alpha'" @focus="$event.target.select()" type="text" :class="{'input': true, 'input-danger': errors.has('SetupLastName')}"
                                id="SetupLastName" placeholder="Last name" class="input input--primary">
                        </div>
                    </div>
                </div>
                <div class="formBlock">
                    <div class="formBlock__inner marginBottom-s">
                        <label for="passStudent">New password</label>
                        <input v-model="setup.newPass" name="password" autocomplete="new-password" v-validate="'required|alpha'" @focus="$event.target.select()" type="password"
                            :class="{'input': true, 'input-danger': errors.has('SetupPass')}"
                            id="SetupPass" placeholder="•••••••••••••••••" class="input input--primary">
                    </div>
                </div>
                <div class="formBlock">
                    <div class="formBlock__inner marginBottom-s">
                        <label for="SetupPassRe">Confirm new password</label>
                        <input name="repassword" autocomplete="new-password" v-validate="'required|alpha'" @focus="$event.target.select()" type="password"
                            :class="{'input': true, 'input-danger': errors.has('SetupPassRe')}"
                            id="SetupPassRe" placeholder="•••••••••••••••••" class="input input--primary">
                    </div>
                </div>
            </form>
            <div class="formBlock paddingBottom-m">
                <button class="btn btn--big" @click.prevent="submitSetup">Next</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data: () =>({
            setup: {
                firstName: '',
                lastName: '',
                newPass: ''
            }
        }),
        methods:{
            submitSetup(){
                const self = this
                const name = `${self.setup.firstName} ${self.setup.lastName}`
                this.$store.dispatch('auth/addNewAuth',{
                    name: name,
                    pass: self.setup.newPass
                })
                this.$router.push({name: 'getwelcomefinish'})
            }
        }
    }
</script>
<style scoped>
label{
    text-align: left!important;
}
</style>
