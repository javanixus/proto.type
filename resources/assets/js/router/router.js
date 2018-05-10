// default deb
import Vue from 'vue';
import Router from 'vue-router';

//exec
Vue.use(Router);

//root routing
const LoginStudents = () => import('./../components/auth/students/login');
const LoginStudentsForm = () => import('./../components/auth/students/loginForm');
const LoginStudentsForgot = () => import('./../components/auth/students/forgot');
const NotFound = () => import('./../components/404');
const StudentDash = () => import('./../components/dashboards/students/dashboard');
const StudentDashProject = () => import('./../components/dashboards/students/project');
const StudentDashTeam = () => import('./../components/dashboards/students/team');
const Loading = () => import('./../components/loading');
const GetWelcome = () => import('./../components/auth/students/getstarted/welcome');
const StudentDashProfile = () => import('./../components/dashboards/students/profile');

export default new Router({
    routes: [
        {
            path: '',
            component: LoginStudents,
            children: [{
                path: '/forgot',
                component: LoginStudentsForgot
            },
            {
                path: '/',
                component: LoginStudentsForm
            }
            ]
        },
        {
            path: '/loading',
            component: Loading
        },
        {
            path: '*',
            redirect: '/404'
        },
        {
            path: '/404',
            component: NotFound
        },
        {
            path: '/home',
            component: StudentDash,
            children: [{
                path: '',
                component: StudentDashProject,
                name: 'studentproject'
            },
            {
                path: 'team',
                component: StudentDashTeam,
                name: 'studentteam'
            },
            {
                path: 'profile',
                component: StudentDashProfile,
                name: 'studentprofile'
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