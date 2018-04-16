import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export default store = new Vuex.Store({
    state: {
        value: 0
    },
    getters,
    mutations,
    actions,
});