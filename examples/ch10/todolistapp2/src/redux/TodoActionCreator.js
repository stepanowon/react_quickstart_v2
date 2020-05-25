import Constant from '../Constant';

const TodoActionCreator = {
    addTodo(todo, desc) {
        return { type: Constant.ADD_TODO, payload: { todo, desc } }
    },
    deleteTodo(id) {
        return { type: Constant.DELETE_TODO, payload: { id } }
    },
    toggleDone(id) {
        return { type: Constant.TOGGLE_DONE, payload : { id } }
    },
    updateTodo(id, todo, desc, done) {
        return { type: Constant.UPDATE_TODO, payload : { id, todo, desc, done } }
    },
}
export default TodoActionCreator;
