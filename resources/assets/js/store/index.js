import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie';
import auth from './modules/auth'
import project from './modules/project'

Vue.use(Vuex)

/* eslint-disable no-param-reassign */
export default new Vuex.Store({
  modules: {
    auth,
    project
  },
  plugins: [
    createPersistedState({
    key: 'prototype',
    storage: {
      getItem: key => Cookies.get(key),
      setItem: (key, value) => Cookies.set(key, value, { expires: 3 }),
      removeItem: key => Cookies.remove(key)
    }
  }
),
],
});