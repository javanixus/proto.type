<template>
  <div>
      <div class="svgicon">
        <img src="/images/recovery.svg" alt="">
      </div>
      <div class="formDesc">
        <p>Fill in your username or email address and we'll email you a link allowing you to reset your password.</p>
      </div>
      <div class="formBlock">
        <div class="formBlock__inner marginBottom-s">
            <label for="userStudentForgot">Username or email</label>
            <input @focus="$event.target.select()" type="text" :class="{'input-disabled': Isdisabled}" :disabled="Isdisabled" id="userStudentForgot" :placeholder="placeholder" class="input input--primary">
        </div>                    
      </div>
      <div class="formButton">
            <router-link exact to="/">back to login</router-link>
            <button :disabled="Isdisabled" :class="{'btn-disabled': Isdisabled}" class="btn btn--primary" type="submit" @click.prevent="fetchData">{{buttontext}}</button>
      </div>    
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      buttontext: 'SEND RESET EMAIL',
      placeholder: 'pampam or fahmiirsyad10@protonmail.com',
      Isdisabled: false
    }
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
  },
}
</script>
