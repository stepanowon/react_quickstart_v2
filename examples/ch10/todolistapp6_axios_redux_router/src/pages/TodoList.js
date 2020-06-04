import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

import TodoActionCreator from '../redux/TodoActionCreator';
import { useDispatch, useSelector } from 'react-redux';

const TodoList = (props) => {
    let todoItems = props.states.todolist.map((item)=> {
        return <TodoItem key={item.id} todoitem={item} callbacks={props.callbacks} />
    })
    
    return (
        <>
        <div className="row">
            <div className="col p-3">
                <Link className="btn btn-primary" to="/todos/add">연락처 추가</Link>
                { " " } <button className="btn btn-primary mr-1" 
                     onClick={ ()=>props.callbacks.fetchTodoList() }>연락처 새로고침</button>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <ul className="list-group">{todoItems}</ul>
            </div>
        </div>
        </>
    );
};

TodoList.propTypes = {
    states : PropTypes.object.isRequired,
    callbacks : PropTypes.object.isRequired,
}

const TodoListContainer = () => {
    const dispatch = useDispatch()
    const failCallback = (message)=> {
        alert(message);
    }
    var propsObject = {
        states : {    todolist : useSelector(state => state.todolist)  },
        callbacks : {
            fetchTodoList : (id) => dispatch(TodoActionCreator.asyncFetchTodoList(failCallback)),
            deleteTodo : (id) => dispatch(TodoActionCreator.asyncDeleteTodo(id, failCallback)),
            toggleDone : (id) => dispatch(TodoActionCreator.asyncToggleDone(id, failCallback))
        }
    }

    return (
        <TodoList {...propsObject} />
    );
};

export default TodoListContainer;