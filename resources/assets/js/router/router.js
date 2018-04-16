// default deb
import Vue from 'vue';
import Router from 'vue-router';

//exec
Vue.use(Router);

//root routing
import Example from './../components/ExampleComponent';

export default new Router({
    routes: [
        {
            name: 'Example',
            path: '/',
            component: Example
        },
        {
            path: '*',
            redirect: '/404'
        },
    ],
    mode: 'history'
  });