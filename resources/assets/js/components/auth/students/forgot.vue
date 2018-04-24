<template>
  <div>
      <div class="svgicon">
        <img src="/images/recovery.svg" alt="">
      </div>
      <div class="formDesc">
        <p>Fill in your username or email address and we'll email you a link allowing you to reset your password.</p>
      </div>
      <form @submit.prevent="validateBeforeSubmit">
        <div class="formBlock">
          <div class="formBlock__inner marginBottom-s">
            <label for="userStudentForgot">Username or email</label>
            <input name="email" v-validate="'required|email'" v-model="recovery" @focus="$event.target.select()" type="text" :class="{'input-disabled': Isdisabled, 'input': true, 'input-danger': errors.has('email')}" id="userStudentForgot" :placeholder="placeholder" class="input input--primary">
            <p v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</p>
          </div>                    
        </div>
        <div class="formButton">
            <router-link exact to="/">back to login</router-link>
            <button :disabled="!authUserIsPassed" :class="{'btn-disabled': !authUserIsPassed}" class="btn btn--primary" type="submit">{{buttontext}}</button>
        </div>
      </form>    
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      buttontext: 'SEND RESET EMAIL',
      placeholder: 'fahmiirsyad10@protonmail.com',
      Isdisabled: false,
      recovery: ''
    }
  },
  computed: {
    authUserIsPassed() {
      return this.recovery;
    },
  },
  methods: {
    fetchData() {
    var self = this;
      self.buttontext = self.placeholder = 'SENDING...';
      console.log(self.buttontext);
      self.Isdisabled = true;
      axios.get('https://jsonplaceholder.typicode.com/users')
          .then(res => {
            console.log(res)
            setTimeout(()=>{ self.buttontext = self.placeholder = 'SUCCESS'; self.Isdisabled = false; }, 2000);
          })
          .catch(error => {
            console.log(error)
          })
    },
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.fetchData();
          return;
        }
        alert('Correct them errors!');
    });
    }    
  },
}
</script>
