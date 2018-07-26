export default {
    namespaced: true,
    state:{
        isNew: false,
        isLogged: false,
        new: {
            name: '',
            password: ''
        },
    },
    getters: {

    },
    actions: {
        loginAuth(context){
            context.commit('loginAuthMutate')
        }
    },
    mutations: {
        loginAuthMutate: state => state.isLogged = true
        }
    }