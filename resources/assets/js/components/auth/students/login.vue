<template>
  <div id="logstudent">
      <div class="login">
        <div class="login__form">
          <div class="formContent">
            <div class="formContent__inner">
              <div class="formContent__inner__core">
                <div v-if="!loading">
                  <form>
                    <div class="formBlock">
                      <div class="formBlock__inner marginBottom-s">
                        <label for="userStudent">Username or email</label>
                        <input type="text" id="userStudent" placeholder="pampam or fahmiirsyad10@protonmail.com" class="input input--primary">
                      </div>
                    </div>
                    <div class="formBlock">
                      <div class="formBlock__inner marginBottom-s">
                        <label for="passStudent">Password</label>
                        <input type="password" id="passStudent" placeholder="•••••••••••••••••" class="input input--primary">
                      </div>                    
                    </div>
                    <div class="formButton">
                      <router-link to="/forgot">forgot?</router-link>
                      <button class="btn btn--primary" type="submit" @click.prevent="fetchData">LOG IN TO PROTO.TYPE</button>
                    </div>
                  </form>
                </div>
                <div v-if="loading">
                  <p>processing... wait pls 😂</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="login__cover">
          <div class="coverContent">
            <div class="coverContent__inner">
              <div class="coverContent__inner_core">
                <p>hello</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      loading: false,
      users: null,
      error: null
    }
  },
  created(){
    this.fetchData();
  },
  methods: {
    fetchData() {
      console.log(this.loading);
      this.error = this.users = null;
      this.loading = true;
      console.log(this.loading);
      axios.get('https://jsonplaceholder.typicode.com/users')
          .then(res => {
            console.log(res)
            var self = this;
            setTimeout(()=>{ self.loading = false; }, 2000);
          })
          .catch(error => {
            console.log(error)
          })
    }
  }
}
</script>
