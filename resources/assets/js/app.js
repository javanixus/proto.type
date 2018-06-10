import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import VeeValidate from 'vee-validate';
import Vmodal from 'vue-js-modal';
import store from './store/store';
import crypto from './crypto/crypto';

Vue.use(Vmodal);
Vue.use(VeeValidate);
Vue.mixin(crypto);

// guard point
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    console.log(store.state.isLogged)
    if (store.state.isLogged === false) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})
new Vue({
    el: '#app',
    router,
    store,
    crypto,
    template: '<App/>',
    components: { App },
  });