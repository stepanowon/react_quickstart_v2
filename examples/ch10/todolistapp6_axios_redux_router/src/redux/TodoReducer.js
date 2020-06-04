import Constant from '../Constant';
import produce from 'immer';

const initialState = {
    todolist : [],
    isloading : false
}

const TodoReducer = (state=initialState, action) => {
    switch(action.type) {
        case Constant.ADD_TODO_REQUEST :
        case Constant.DELETE_TODO_REQUEST : 
        case Constant.TOGGLE_DONE_REQUEST : 
        case Constant.UPDATE_TODO_REQUEST : 
            return { ...state, isloading : true };
        case Constant.FETCH_TODOLIST_REQUEST : 
            return { ...state, isloading : true, todolist: [] };

        case Constant.FETCH_TODOLIST_FAIL :
        case Constant.ADD_TODO_FAIL :
        case Constant.DELETE_TODO_FAIL : 
        case Constant.TOGGLE_DONE_FAIL :
        case Constant.UPDATE_TODO_FAIL :
            return { ...state, isloading: false };
        case Constant.FETCH_TODOLIST_SUCCESS :
            return { ...state, isloading:false, todolist: action.payload.todolist };
        case Constant.ADD_TODO_SUCCESS :
            return produce(state, draft=>{
                draft.todolist.push(action.payload.todoitem);
                draft.isloading = false;
            })
        case Constant.DELETE_TODO_SUCCESS : 
            return produce(state, draft=>{
                let index = draft.todolist.findIndex((todo)=>todo.id === parseInt(action.payload.id,10))
                draft.todolist.splice(index,1);
                draft.isloading = false;
            })
        case Constant.TOGGLE_DONE_SUCCESS : 
            return produce(state, draft=>{
                let index = draft.todolist.findIndex((todo)=>todo.id === parseInt(action.payload.id,10))
                draft.todolist[index].done = !draft.todolist[index].done;
                draft.isloading = false;
            })
        case Constant.UPDATE_TODO_SUCCESS :
            return produce(state, draft=>{
                let index = draft.todolist.findIndex((todo)=>todo.id === parseInt(action.payload.todoitem.id,10))
                draft.todolist[index] = action.payload.todoitem;
                draft.isloading = false;
            })
        default :
            return state;
    }
}

export default TodoReducer;