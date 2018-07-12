<template>
  <div>
    <form @submit.prevent="validateBeforeSubmit">
      <div class="formBlock">
        <div class="formBlock__inner marginBottom-s">
          <label for="userStudent">Username or email</label>
          <input v-model="dataLogin.username" name="username or email" @focus="$event.target.select()" v-validate="'required|alpha'" type="text" :disabled="Isdisabled" :class="{'input-disabled': Isdisabled, 'input': true, 'input-danger': errors.has('username or email')}" id="userStudent" placeholder="pampam or fahmiirsyad10@protonmail.com" class="input input--primary">
          <p v-show="errors.has('username or email')" class="help is-danger">{{ errors.first('username or email') }}</p>
        </div>
      </div>
      <div class="formBlock">
        <div class="formBlock__inner marginBottom-s">
          <label for="passStudent">Password</label>
            <input v-model="dataLogin.password" name="password" v-validate="'required|alpha'" @focus="$event.target.select()" type="password" :disabled="Isdisabled" :class="{'input-disabled': Isdisabled, 'input': true, 'input-danger': errors.has('username or email')}" id="passStudent" placeholder="•••••••••••••••••" class="input input--primary">
            <p v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</p>
        </div>
      </div>
      <div class="formButton">
        <router-link exact to='forgot'>forgot?</router-link>
          <button :disabled="!authUserIsPassed" :class="{'btn-disabled': !authUserIsPassed}" class="btn btn--primary" type="submit">{{buttontext}}</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data: () => ({
    buttontext: 'LOG IN TO PROTO.TYPE',
    Isdisabled: false,
    dataLogin: {
      username: '',
      password: ''
    }
  }),
  computed: {
    authUserIsPassed() {
      return this.dataLogin.username && this.dataLogin.password;
    },
  },
  methods: {
    fetchData() {
    var self = this;
      self.buttontext = 'LOGIN IN...';
      console.log(self.buttontext);
      self.Isdisabled = true;
      axios.get('https://jsonplaceholder.typicode.com/users')
          .then(res => {
            console.log(res)
            setTimeout(()=>{ self.buttontext = 'SUCCESS'; self.Isdisabled = false; }, 2000);
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
