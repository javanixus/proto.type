export default {
    namespaced: true,
    state:{
        isNew: true,
        new: {
            name: '',
            password: ''
        },
    },
    actions: {
        loginAuth(context,status){
            context.commit('loginAuthMutate',status)
        },
        addNewAuth(context,data){
            context.commit('AddNewAuthMutate',data)
        },
        logoutAuth(context,status){
            context.commit('logoutAuthMutate',status)
        }
    },
    mutations: {
        loginAuthMutate: (state,status) => state.isLogged = true & localStorage.setItem('isLogged',status),
        logoutAuthMutate: (state,status) => state.isLogged = false & localStorage.removeItem('isLogged'),
        AddNewAuthMutate(state,data){
            state.isNew= false
            state.new = {
                name: data.name,
                password: data.password
            }
        }
        }
    }