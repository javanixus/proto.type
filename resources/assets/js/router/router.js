// default deb
import Vue from 'vue';
import Router from 'vue-router';
// import VueAcl from 'vue-acl';

//exec
Vue.use(Router);
// Vue.use(VueAcl, {
//     init: 'public',
//     // router: router,
//     fail: '/error',
//     save: true
//   })

//root routing
import CoreComponent from './../components/Core';
import LoginStudents from './../components/auth/students/login';

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