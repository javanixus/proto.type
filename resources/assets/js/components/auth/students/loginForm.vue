<template>
  <div>
    <form @submit.prevent="validateBeforeSubmit">
      <div class="formBlock">
        <div class="formBlock__inner marginBottom-s">
          <label for="userauth">Email</label>
          <vinput v-model="dataLogin.username" :id="'userauth'" :type="'text'" :name="'email'" :validate="'required|email'" :placeholder="'fahmi@prototype.com'" :add="true"/>
        </div>
      </div>
      <div class="formBlock">
        <div class="formBlock__inner marginBottom-s">
          <label for="passauth">Password</label>
            <vinput v-model="dataLogin.password" :id="'passauth'" :type="'password'" :name="'password'" :validate="'required'" :placeholder="'•••••••••••'" :add="true"/>
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
import axios from 'axios'

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
      self.Isdisabled = true;
      axios.get('https://jsonplaceholder.typicode.com/users')
          .then(res => {
            this.$store.dispatch('auth/loginAuth',true)
            this.$router.push({name: 'studentproject'})
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
