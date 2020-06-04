import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';
import TodoActionCreator from '../redux/TodoActionCreator';
import { useDispatch, useSelector } from 'react-redux';

const EditTodo = props => {
    const history = useHistory();
    const params = useParams();
    const todoitem = props.todolist.find((item)=>item.id === parseInt(params.id,10));
    if (!todoitem) {
        history.push('/todos');
    }

    const [ todoOne, setTodoOne ] = useState({ ...todoitem });
    
    const updateContactHandler = ()=> {
        if (todoOne.todo.trim() === "" || 
           todoOne.desc.trim()==="") {
            alert('반드시 할일, 설명을 입력해야 합니다.');
            return;
        }
        let { id, todo, desc, done } = todoOne;
        props.callbacks.updateTodo(id, todo, desc, done, ()=> {
            history.push('/todos');
        });
    }

    return (
        <>
        <div className="row">
            <div className="col p-3">
                <h2>연락처 수정</h2>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <input type="hidden" className="form-control" id="id" defaultValue={todoOne.id} disabled />
                <div className="form-group">
                    <label htmlFor="todo">할일:</label>
                    <input type="text" className="form-control" id="todo" value={todoOne.todo} 
                         onChange={(e)=>setTodoOne({ ...todoOne, todo:e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">설명:</label>
                    <textarea className="form-control" rows="3" id="desc" value={todoOne.desc} 
                          onChange={(e)=>setTodoOne({ ...todoOne, desc:e.target.value })}></textarea>  
                </div>
                <div className="form-group">
                    <label htmlFor="done">완료여부 : </label>{' '}
                    <input type="checkbox" checked={todoOne.done} 
                          onChange={(e)=>setTodoOne({ ...todoOne, done:e.target.checked })} />
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-primary m-1" onClick={updateContactHandler}>수 정</button>
                    <button type="button" className="btn btn-primary m-1" 
                         onClick={()=>history.push('/todos')}>취 소</button>
                </div>
            </div>
        </div>
        </>
    );
};

EditTodo.propTypes = {
    callbacks :PropTypes.object.isRequired,
};

const EditTodoContainer = () => {
    const dispatch = useDispatch()
    const failCallback = (message)=> {
        alert(message);
    }
    var propsObject = {
        todolist : useSelector(state => state.todolist),
        callbacks : {
            updateTodo : (id, todo, desc, done, successCallback) => 
                 dispatch(TodoActionCreator.asyncUpdateTodo(id, todo, desc, done, successCallback, failCallback)),
        }
    }
    return (
        <EditTodo {...propsObject} />
    );
};

export default EditTodoContainer;