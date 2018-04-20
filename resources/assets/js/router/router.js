// default deb
import Vue from 'vue';
import Router from 'vue-router';

//exec
Vue.use(Router);

//root routing
import CoreComponent from './../components/Core';
import LoginStudents from './../components/auth/students/login';
import ForgotStudents from './../components/auth/students/forgot';

export default new Router({
    routes: [
        {
            path: '',
            component: LoginStudents
        },
        {
            path: '/forgot',
            component: ForgotStudents
        },
        {
            path: '*',
            redirect: '/404'
        },
    ],
    mode: 'history'
  });