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
const StudentBoard = () => import('./../components/dashboards/students/board/board'); 
const StudentBoardOverview = () => import('./../components/dashboards/students/board/overview'); 
const StudentBoardStorage = () => import('./../components/dashboards/students/board/storage'); 
const StudentBoardTask = () => import('./../components/dashboards/students/board/task'); 
const StudentBoardTeam = () => import('./../components/dashboards/students/board/team'); 
const StudentBoardSetting = () => import('./../components/dashboards/students/board/setting'); 
const StudentBoardActivity = () => import('./../components/dashboards/students/board/activity'); 
const StudentExplore = () => import('./../components/dashboards/students/explore/explore');

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
            path: '/h',
            component: StudentDash,
            meta: {requiresAuth: true},
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
                name: 'studentexplore'
            },
            {
                path: 'profile',
                component: StudentDashProfile,
                name: 'studentprofile'
            },
            {
                path: 'b/jvnx',
                component: StudentBoard,
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
                        path: 'task',
                        component: StudentBoardTask,
                        name: 'studentboardtask'
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
                    },
                    {
                        path: 'activity',
                        component: StudentBoardActivity,
                        name: 'studentboardactivity'
                    }
                ]
            }]
        },
        {
            path: '/catchup',
            component: GetWelcome
        },
    ],
    mode: 'history',
  });