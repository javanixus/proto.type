import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* eslint-disable no-param-reassign */
export default new Vuex.Store({
  state: {
    items: {
      todo: [],
      inProgress: [],
      needReview:[],
      done: [],
      docs:[],
      issue:[],
      misc:[],
    },
    new: {
      name:'',
      password: ''
    },
    isNew: true,
    isLogged: true,
    nextId: 1,
    encryptedKey: ''
  },
  mutations: {
    addItem(state, item) {
      state.items.todo.push(Object.assign(item, { id: state.nextId }));
      state.nextId += 1;
    },
    addNew(state,data){
      state.new.name = data.name
      state.new.password = data.pass
    },
    updateItems(state, { items, id }) {
      state.items[id] = items;
    }
  }
});