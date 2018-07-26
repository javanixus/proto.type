export default {
    namespaced: true,
    state:{
        isNew: true,
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
        },
        addNewAuth(context,data){
            context.commit('AddNewAuthMutate',data)
        }
    },
    mutations: {
        loginAuthMutate: state => state.isLogged = true,
        AddNewAuthMutate(state,data){
            state.isNew= false
            state.new = {
                name: data.name,
                password: data.password
            }
        }
        }
    }