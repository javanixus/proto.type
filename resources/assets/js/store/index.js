import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie';
import mutations from './mutations'
import state from './state'
import actions from './actions'
Vue.use(Vuex)

/* eslint-disable no-param-reassign */
export default new Vuex.Store({
  state,
  plugins: [createPersistedState({
    storage: {
      getItem: key => Cookies.get(key),
      setItem: (key, value) => Cookies.set(key, value, { expires: 3 }),
      removeItem: key => Cookies.remove(key)
    }
  })],
  actions,
  mutations,
});