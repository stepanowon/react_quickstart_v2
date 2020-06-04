import Constant from '../Constant';
import axios from 'axios';

const USER = "gdhong";
const BASEURI = "/api/todolist_long/" + USER;

const TodoActionCreator = {
    fetchTodoListRequest : ()=> ({ type : Constant.FETCH_TODOLIST_REQUEST }),
    addTodoRequest : ()=> ({ type : Constant.ADD_TODO_REQUEST }),
    toggleDoneRequest : ()=> ({ type : Constant.TOGGLE_DONE_REQUEST }),
    updateTodoRequest : ()=> ({ type : Constant.UPDATE_TODO_REQUEST }),
    deleteTodoRequest : ()=> ({ type : Constant.DELETE_TODO_REQUEST }),

    fetchTodoListSuccess : (todolist)=> ({ type : Constant.FETCH_TODOLIST_SUCCESS, payload: { todolist } }),
    addTodoSuccess : (todoitem)=>({ type : Constant.ADD_TODO_SUCCESS, payload: { todoitem } }),
    deleteTodoSuccess : (id)=>({ type: Constant.DELETE_TODO_SUCCESS, payload: { id } }),
    toggleDoneSuccess : (id)=>({ type: Constant.TOGGLE_DONE_SUCCESS, payload: { id } }),
    updateTodoSuccess : (todoitem)=>({ type: Constant.UPDATE_TODO_SUCCESS, payload: { todoitem } }),

    fetchTodoListFail : ()=> ({ type : Constant.FETCH_TODOLIST_FAIL }),
    addTodoFail : ()=> ({ type : Constant.ADD_TODO_FAIL }),
    deleteTodoFail : ()=> ({ type : Constant.DELETE_TODO_FAIL }),
    toggleDoneFail : ()=> ({ type : Constant.TOGGLE_DONE_FAIL }),
    updateTodoFail : ()=> ({ type : Constant.UPDATE_TODO_FAIL }),

    asyncFetchTodoList : (failCallback)=> {
        return (dispatch, getState)=> {
            dispatch({ type: Constant.FETCH_TODOLIST_REQUEST });
            axios.get(BASEURI)
            .then((response)=> {
                dispatch({ type:Constant.FETCH_TODOLIST_SUCCESS, payload : { todolist: response.data } });
            })
            .catch((error)=>{   
                failCallback("할일 조회 실패 : " + error);      dispatch({ type:Constant.FETCH_TODOLIST_FAIL });
            })
        } 
    },
    asyncAddTodo : (todo, desc, successCallback, failCallback) => {
        return (dispatch, getState)=> {
            dispatch({ type: Constant.ADD_TODO_REQUEST });
            axios.post(BASEURI, { todo, desc })
            .then((response)=>{
                if (response.data.status === "success") {
                    dispatch({ type:Constant.ADD_TODO_SUCCESS, 
                          payload : { todoitem: { ...response.data.item, done:false } } });
                    successCallback();
                } else {
                    dispatch({ type:Constant.ADD_TODO_FAIL });
                    failCallback("할일 추가 실패 : " + response.data.message);
                }
            })
            .catch((error)=>{
                dispatch({ type:Constant.ADD_TODO_FAIL });     failCallback("할일 추가 실패 : " + error);
            })
        }
    },
    asyncUpdateTodo : (id, todo, desc, done, successCallback, failCallback) => {
        return (dispatch, getState)=> {
            dispatch({ type: Constant.UPDATE_TODO_REQUEST });
            axios.put(`${BASEURI}/${id}`, { todo, desc, done })
            .then((response)=> {
                if (response.data.status === "success") {
                    dispatch({ type:Constant.UPDATE_TODO_SUCCESS, payload : { todoitem: response.data.item } });
                    successCallback();
                } else {
                    dispatch({ type:Constant.UPDATE_TODO_FAIL });
                    failCallback("할일 변경 실패 : " + response.data.message);
                }
            })
            .catch((error)=>{
                dispatch({ type:Constant.UPDATE_TODO_FAIL });
                failCallback("할일 변경 실패 : " + error);
            })
        }
    },
    asyncToggleDone : (id, failCallback) => {
        return (dispatch, getState)=> {
            dispatch({ type: Constant.TOGGLE_DONE_REQUEST });
            axios.put(`${BASEURI}/${id}/done`)
            .then((response)=> {
                if (response.data.status === "success") {
                    dispatch({ type:Constant.TOGGLE_DONE_SUCCESS, payload : { id } });
                } else {
                    dispatch({ type:Constant.TOGGLE_DONE_FAIL });
                    failCallback("할일 완료 변경 실패 : " + response.data.message);
                }
            })
            .catch((error)=>{
                dispatch({ type:Constant.TOGGLE_DONE_FAIL });
                failCallback("할일 완료 변경 실패 : " + error);
            })
        }
    },
    asyncDeleteTodo : (id, failCallback)=> {
        return (dispatch, getState)=> {
            dispatch({ type: Constant.DELETE_TODO_REQUEST });
            axios.delete(`${BASEURI}/${id}`)
            .then((response)=> {
                if (response.data.status === "success") {
                    dispatch({ type:Constant.DELETE_TODO_SUCCESS, payload : { id } });
                } else {
                    dispatch({ type:Constant.DELETE_TODO_FAIL });
                    failCallback("할일 삭제 실패 : " + response.data.message);
                }
            })
            .catch((error)=>{
                dispatch({ type:Constant.DELETE_TODO_FAIL });
                failCallback("할일 삭제 실패 : " + error);
            })
        }
    }
}

export default TodoActionCreator;