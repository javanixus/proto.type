export default {
    getTodo({commit}, todo){
        commit('GET_TODO', todo)
    },
    addTodo({commit}){
        commit('ADD_TODO')
    },
    editTodo({commit},todo){
        commit('EDIT_TODO',todo)
    },
    removeTodo({commit},todo){
        commit('REMOVE_TODO', todo)
    },
    clearTodo({commit}){
        commit('CLEAR_TODO')
    }
}