// default deb
import Vue from 'vue';
import Router from 'vue-router';
import { resolve } from 'path';

//exec
Vue.use(Router);

//root routing
const LoginStudents = resolve => {
    require.ensure(['./../components/auth/students/login'],() => {
        resolve(require('./../components/auth/students/login'));
    })
}
const LoginStudentsForm = resolve => {
    require.ensure(['./../components/auth/students/loginForm'],() => {
        resolve(require('./../components/auth/students/loginForm'));
    })
}
const LoginStudentsForgot = resolve => {
    require.ensure(['./../components/auth/students/forgot'],() => {
        resolve(require('./../components/auth/students/forgot'));
    })
}
const NotFound = resolve => {
    require.ensure(['./../components/404'],() => {
        resolve(require('./../components/404'));
    })
}
const StudentDash = resolve => {
    require.ensure(['./../components/dashboards/students/dashboard'],() => {
        resolve(require('./../components/dashboards/students/dashboard'));
    })
}
const StudentDashProject = resolve => {
    require.ensure(['./../components/dashboards/students/project'],() => {
        resolve(require('./../components/dashboards/students/project'));
    })
}
const StudentDashTeam = resolve => {
    require.ensure(['./../components/dashboards/students/team'],() => {
        resolve(require('./../components/dashboards/students/team'));
    })
}
const Loading = resolve => {
    require.ensure(['./../components/loading'],() => {
        resolve(require('./../components/loading'));
    })
}
const GetWelcome = resolve => {
    require.ensure(['./../components/auth/students/getstarted/welcome'],() => {
        resolve(require('./../components/auth/students/getstarted/welcome'));
    })
}
const StudentDashProfile = resolve => {
    require.ensure(['./../components/dashboards/students/profile'],() => {
        resolve(require('./../components/dashboards/students/profile'));
    })
}
const StudentBoard = resolve => {
    require.ensure(['./../components/dashboards/students/board/board'],() => {
        resolve(require('./../components/dashboards/students/board/board'));
    })
}
const StudentBoardOverview = resolve => {
    require.ensure(['./../components/dashboards/students/board/overview'],() => {
        resolve(require('./../components/dashboards/students/board/overview'));
    })
}
const StudentBoardStorage = resolve => {
    require.ensure(['./../components/dashboards/students/board/storage'],() => {
        resolve(require('./../components/dashboards/students/board/storage'));
    })
}
const StudentBoardTask = resolve => {
    require.ensure(['./../components/dashboards/students/board/task'],() => {
        resolve(require('./../components/dashboards/students/board/task'));
    })
}
const StudentBoardTeam = resolve => {
    require.ensure(['./../components/dashboards/students/board/team'],() => {
        resolve(require('./../components/dashboards/students/board/team'));
    })
}
const StudentBoardSetting = resolve => {
    require.ensure(['./../components/dashboards/students/board/setting'],() => {
        resolve(require('./../components/dashboards/students/board/setting'));
    })
}
const StudentBoardActivity = resolve => {
    require.ensure(['./../components/dashboards/students/board/activity'],() => {
        resolve(require('./../components/dashboards/students/board/activity'));
    })
}

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