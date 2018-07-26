export default {
    namespaced: true,
    state: {
        items: [],
        hasProject: false,
        nextId: 1,
        encryptedKey: ''
    },
    actions: {
        getProject(context){
            context.commit('getProject')
        },
        addProject(context, data){
            context.commit('addProject', data)
        },
        validateProject(context,status){
            context.commit('validateProject', status)
        }
    },
    getters: {

    },
    mutations: {
        getProject(state){
            return state.items
        },
        addProject(state, item) {
            state.items.push(Object.assign(item, {
                keyId: state.nextId
            }))
            state.nextId += 1
        },
        validateProject(state, status) {
            state.hasProject = status
        },
    }
}