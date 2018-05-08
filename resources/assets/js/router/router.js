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
import dashboardStudents from './../components/dashboards/students/dashboard';
import dashboardStudentsProject from './../components/dashboards/students/project';
import dashboardStudentsTeam from './../components/dashboards/students/team';
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
            component: dashboardStudents,
            children: [{
                path: '',
                component: dashboardStudentsProject,
                name: 'studentproject'
            },
            {
                path: 'team',
                component: dashboardStudentsTeam,
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