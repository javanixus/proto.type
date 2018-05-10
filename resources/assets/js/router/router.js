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
// const dashboardStudents = () => import('./../components/dashboards/students/dashboard.vue');
// const dashboardStudents = resolve => { require.ensure(['./../components/dashboards/students/dashboard'],() => { resolve(require('./../components/dashboards/students/dashboard')) })}
// const dashboardStudentsProject = resolve => { require.ensure(['./../components/dashboards/students/project'],() => { resolve(require('./../components/dashboards/students/project')) })}
// import dashboardStudentsTeam from './../components/dashboards/students/team';
import GetWelcome from './../components/auth/students/getstarted/welcome';


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
        },
        {
            path: '/home',
            component: () => import('./../components/dashboards/students/dashboard'),
            children: [{
                path: '',
                component: () => import('./../components/dashboards/students/project'),
                name: 'studentproject'
            },
            {
                path: 'team',
                component: () => import('./../components/dashboards/students/team'),
                name: 'studentteam'
            }
        ]
        },
        {
            path: '/catchup',
            component: GetWelcome
        },
    ],
    mode: 'history'
  });