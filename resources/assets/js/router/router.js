// default deb
import Vue from 'vue';
import Router from 'vue-router';

//exec
Vue.use(Router);

//root routing
import CoreComponent from './../components/Core';
import LoginStudents from './../components/auth/students/login';
import LoginStudentsForm from './../components/auth/students/loginForm';
import ForgotStudents from './../components/auth/students/forgot';

export default new Router({
    routes: [
        {
            path: '',
            component: LoginStudents,
            children: [{
                path: '/forgot',
                component: ForgotStudents
            },
            {
                path: '/',
                component: LoginStudentsForm
            }
            ]
        },
        {
            path: '*',
            redirect: '/404'
        },
    ],
    mode: 'history'
  });