// default deb
import Vue from 'vue';
import Router from 'vue-router';

//exec
Vue.use(Router);

//root routing
import LoginStudents from './../components/auth/students/login';
import LoginStudentsForm from './../components/auth/students/loginForm';
import ForgotStudents from './../components/auth/students/forgot';
import loading from './../components/loading';
import notfound from './../components/404';

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
            path: '/loading',
            component: loading
        },
        {
            path: '*',
            redirect: '/404'
        },
        {
            path: '/404',
            component: notfound
        }
    ],
    mode: 'history'
  });