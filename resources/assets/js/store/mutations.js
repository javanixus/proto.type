export default {
    GET_TODO(state, todo){
        state.newTodo = todo
    },
    ADD_TODO(state){
        this.state.todos.push({
            body: state.newTodo,
            completed: false
        })
    },
    EDIT_TODO(state, todo){
        var todos = state.todos
        todos.splice(todos.indexOf(todo),1)
        state.todos = todos
        state.newTodo = todo.body
    },
    REMOVE_TODO(state,todo){
        var todos = state.todos
        todos.splice(todos.indexOf(todo),1)
    },
    CLEAR_TODO(state){
        state.newTodo = ''
    }
}