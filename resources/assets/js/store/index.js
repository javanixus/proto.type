import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)

/* eslint-disable no-param-reassign */
export default new Vuex.Store({
  state,
  mutations
});