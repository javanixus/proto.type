// default deb
import Vue from 'vue';
import Router from 'vue-router';
import store from './../store/index'

//exec
Vue.use(Router);

//root routing
const LoginStudents = () => import('./../components/auth/students/login');
const LoginStudentsForm = () => import('./../components/auth/students/loginForm');
const LoginStudentsForgot = () => import('./../components/auth/students/forgot');
const NotFound = () => import('./../components/404');
const StudentDash = () => import('./../components/dashboards/students/dashboard');
const StudentDashProject = () => import('./../components/dashboards/students/project/index');
const StudentDashTeam = () => import('./../components/dashboards/students/team');
const Loading = () => import('./../components/loading');
const GetWelcome = () => import('./../components/auth/students/getstarted/welcome');
const GetWelcomeGeneral = () => import('./../components/auth/students/getstarted/general');
const GetWelcomeFinish = () => import('./../components/auth/students/getstarted/finish')
const StudentDashProfile = () => import('./../components/dashboards/students/profile');
const StudentBoard = () => import('./../components/dashboards/students/board/board');
const StudentBoardOverview = () => import('./../components/dashboards/students/board/overview');
const StudentBoardStorage = () => import('./../components/dashboards/students/board/storage');
const StudentBoardTeam = () => import('./../components/dashboards/students/board/team');
const StudentBoardSetting = () => import('./../components/dashboards/students/board/setting');
const StudentExplore = () => import('./../components/dashboards/students/explore/explore');

export default new Router({
    routes: [
        {
            path: '',
            component: LoginStudents,
            beforeEnter(to,from,next){
                const auth = localStorage.getItem('isLogged')
                auth ? next({path: '/h/'}) : auth === false ? next() : next()
            },
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
            path: '/h',
            component: StudentDash,
            meta: {requiresAuth: true},
            beforeEnter: (to,from,next) => {
                if(to.matched.some(record => record.meta.requiresAuth)){
                    const auth = localStorage.getItem('isLogged')
                    auth ? next() : next({path: '/'}) & localStorage.removeItem('isLogged')
                } else {
                    next()
                }
            },
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
                path: 'explore',
                component: StudentExplore,
                name: 'studentexplore',
                beforeEnter(to,from,next){
                    const auth = localStorage.getItem('isLogged')
                    auth ? next() : next({path: '/'}) & localStorage.removeItem('isLogged')
                },
            },
            {
                path: 'profile',
                component: StudentDashProfile,
                name: 'studentprofile',
                beforeEnter(to,from,next){
                    const auth = localStorage.getItem('isLogged')
                    auth ? next() : next({path: '/'}) & localStorage.removeItem('isLogged')
                },
            },
            {
                path: 'b/:id',
                component: StudentBoard,
                beforeEnter(to,from,next){
                    const auth = localStorage.getItem('isLogged')
                    auth ? next() : next({path: '/'}) & localStorage.removeItem('isLogged')
                },
                children: [
                    {
                        path: '',
                        component: StudentBoardOverview,
                        name: 'studentboard'
                    },
                    {
                        path: 'storage',
                        component: StudentBoardStorage,
                        name: 'studentboardstorage'
                    },
                    {
                        path: 'team',
                        component: StudentBoardTeam,
                        name: 'studentboardteam'
                    },
                    {
                        path: 'setting',
                        component: StudentBoardSetting,
                        name: 'studentboardsetting'
                    }
                ]
            }]
        },
        {
            path: '/welcome',
            component: GetWelcome,
            meta: {requiresAuth: true},
            beforeEnter: (to,from,next) => {
                if(to.matched.some(record => record.meta.requiresAuth)){
                    if(store.state.auth.isNew === false){
                        next({
                            path: '/h',
                            query: { redirect: to.fullPath}
                        })
                    } else {
                        next()
                    }
                } else {
                    next()
                }
            },
            children: [{
                path: '',
                component: GetWelcomeGeneral
            },
            {
                path: '/finish',
                component: GetWelcomeFinish,
                name: 'getwelcomefinish'
            }
        ]
        },
    ],
    mode: 'history',
});