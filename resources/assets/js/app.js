import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import VeeValidate from 'vee-validate';

// import store from './store/store';

Vue.use(VeeValidate);

new Vue({
    el: '#app',
    router,
    // store,
    template: '<App/>',
    components: { App },
  });