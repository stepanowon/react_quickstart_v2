import Constant from '../Constant';
import produce from 'immer';

const initialState = {
    todolist : [
        { id:1, todo:"ES6학습", desc:"설명1", done:false },
        { id:2, todo:"React학습", desc:"설명2", done:false },
        { id:3, todo:"ContextAPI 학습", desc:"설명3", done:true },
        { id:4, todo:"야구경기 관람", desc:"설명4", done:false },
    ]
}

const TodoReducer = (state=initialState, action) => {
    let index;
    switch(action.type) {
        case Constant.ADD_TODO :
            return produce(state, (draft)=> {
                draft.todolist.push({ id:new Date().getTime(), 
                    todo:action.payload.todo, desc: action.payload.desc, done:false});
            })
        case Constant.DELETE_TODO : 
            index = state.todolist.findIndex((item)=>item.id === action.payload.id);
            return produce(state, (draft)=> {
                draft.todolist.splice(index,1);
            })
        case Constant.TOGGLE_DONE : 
            index = state.todolist.findIndex((item)=>item.id === action.payload.id);
            return produce(state, (draft)=> {
                draft.todolist[index].done = !draft.todolist[index].done;
            })
        case Constant.UPDATE_TODO : 
            index = state.todolist.findIndex((item)=>item.id === action.payload.id);
            return produce(state, (draft)=> {
                draft.todolist[index] = { ...action.payload };
            })
        default : 
            return state;
    }
}

export default TodoReducer;