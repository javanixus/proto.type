<template>
  <div id="logstudent">
      <div class="login">
        <div class="login__form">
          <div class="formContent">
            <div class="formContent__inner">
              <div class="formContent__inner__core">
                <router-view v-if="loginpage"></router-view>
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
      forgotpage: false,
      loginpage: true,
      error: null
    }
  },
  created(){
    this.fetchData();
  },
  methods: {
    fetchData() {
      console.log(this.loading);
      this.loginpage = false;
      this.loading = true;
      console.log(this.loading);
      axios.get('https://jsonplaceholder.typicode.com/users')
          .then(res => {
            console.log(res)
            var self = this;
            setTimeout(()=>{ self.loading = false; this.loginpage = true; }, 2000);
          })
          .catch(error => {
            console.log(error)
          })
    },
  },
}
</script>
