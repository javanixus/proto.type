import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* eslint-disable no-param-reassign */
export default new Vuex.Store({
  state: {
    new: {
      name:'',
      password: ''
    },
    items: [],
    hasProject: false,
    isNew: true,
    isLogged: true,
    nextId: 1,
    encryptedKey: ''
  },
  mutations: {
    addNew(state,data){
      state.new.name = data.name
      state.new.password = data.pass
    },
    addProject(state, item){
      state.items.push(Object.assign(item, {keyId: state.nextId}))
      state.nextId += 1
    },
    validateProject(state,val){
      state.hasProject = val
    },
  },
});