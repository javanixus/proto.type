// default deb
import Vue from 'vue';
import Router from 'vue-router';

//exec
Vue.use(Router);

//root routing
import CoreComponent from './../components/Core';

export default new Router({
    routes: [
        {
            path: '/',
            component: CoreComponent
        },
        {
            path: '*',
            redirect: '/404'
        },
    ],
    mode: 'history'
  });