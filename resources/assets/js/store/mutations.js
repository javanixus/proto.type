export default {
    addNew(state, data) {
        state.new.name = data.name
        state.new.password = data.pass
    },
    addProject(state, item) {
        state.items.push(Object.assign(item, {
            keyId: state.nextId
        }))
        state.nextId += 1
    },
    validateProject(state, val) {
        state.hasProject = val
    },
}