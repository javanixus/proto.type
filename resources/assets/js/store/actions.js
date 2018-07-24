export default {
    getProject(context){
        context.commit('getProject')
    },
    addProject(context, data){
        context.commit('addProject', data)
    },
    validateProject(context,status){
        context.commit('validateProject', status)
    },
}