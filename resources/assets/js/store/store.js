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
    isLogged: true,
    nextId: 1,
    encryptedKey: ''
  },
  mutations: {
    addItem(state, item) {
      state.items.todo.push(Object.assign(item, { id: state.nextId }));
      state.nextId += 1;
    },
    updateItems(state, { items, id }) {
      state.items[id] = items;
    }
  }
});