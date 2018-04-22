<template>
  <div>
    <form>
      <div class="formBlock">
        <div class="formBlock__inner marginBottom-s">
          <label for="userStudent">Username or email</label>
          <input @focus="$event.target.select()" type="text" :disabled="Isdisabled" :class="{'input-disabled': Isdisabled}" id="userStudent" placeholder="pampam or fahmiirsyad10@protonmail.com" class="input input--primary">
        </div>
      </div>
      <div class="formBlock">
        <div class="formBlock__inner marginBottom-s">
          <label for="passStudent">Password</label>
            <input @focus="$event.target.select()" type="password" :disabled="Isdisabled" :class="{'input-disabled': Isdisabled}" id="passStudent" placeholder="•••••••••••••••••" class="input input--primary">
        </div>                    
      </div>
      <div class="formButton">
        <router-link exact to='forgot'>forgot?</router-link>
          <button :disabled="Isdisabled" :class="{'btn-disabled': Isdisabled}" class="btn btn--primary" type="submit" @click.prevent="fetchData">{{buttontext}}</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      buttontext: 'LOG IN TO PROTO.TYPE',
      Isdisabled: false
    }
  },
  created(){
    // this.fetchData();
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
  },
}
</script>
