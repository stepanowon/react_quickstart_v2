import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';
import TodoActionCreator from '../redux/TodoActionCreator';
import { useDispatch } from 'react-redux';

const AddTodo = props => {
    const history = useHistory();

    let [ todo, setTodo ] = useState('');
    let [ desc, setDesc ] = useState('');
    
    const addContactHandler = ()=> {
        if (todo.trim() === "" || desc.trim()==="") {
            alert('반드시 할일, 설명을 입력해야 합니다.');
            return;
        } 
        props.callbacks.addTodo(todo, desc, ()=> {
            history.push('/todos'); 
        });
    }
    return (
        <>
        <div className="row">
            <div className="col p-3">
                <h2>연락처 추가</h2>
            </div>
        </div>
        <div className="row">
            <div className="col">
            <div className="form-group">
                    <label htmlFor="todo">할일 :</label>
                    <input type="text" className="form-control" id="todo" 
                        value={todo} onChange={(e)=>setTodo(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">설명 :</label>
                    <textarea className="form-control" rows="3" id="desc" 
                        value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea>  
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-primary m-1"
                        onClick={addContactHandler}>추 가</button>
                    <button type="button" className="btn btn-primary m-1" 
                        onClick={()=>history.push('/todos')}>취 소</button>
                </div>
            </div>
        </div>
        </>
    );
};

AddTodo.propTypes = {
    callbacks :PropTypes.object.isRequired,
};

const AddTodoContainer = (props) => {
    const dispatch = useDispatch()
    const failCallback = (message)=> {
        props.history.push('/todos');
        alert(message);
    }
    var propsObject = {
        callbacks : {
            addTodo : (todo, desc, successCallback) => 
                 dispatch(TodoActionCreator.asyncAddTodo(todo, desc, successCallback, failCallback)),
        }
    }

    return (
        <AddTodo {...propsObject} />
    );
};

export default AddTodoContainer;