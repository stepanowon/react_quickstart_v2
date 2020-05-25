import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

import TodoActionCreator from '../redux/TodoActionCreator';
import { useDispatch, useSelector } from 'react-redux';

const TodoList = (props) => {
    let todoItems = props.states.todolist.map((item)=> {
        return (
            <TodoItem key={item.id} todoitem={item} callbacks={props.callbacks} />
        )
    })

    return (
        <>
        <div className="row">
            <div className="col p-3">
                <Link className="btn btn-primary" to="/todos/add">연락처 추가</Link>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <ul className="list-group">
                    {todoItems}
                </ul>
            </div>
        </div>
        </>
    );
};

TodoList.propTypes = {
    callbacks : PropTypes.object.isRequired,
    states : PropTypes.object.isRequired,
};

const TodoListContainer = () => {
    const dispatch = useDispatch()

    var propsObject = {
        states : {
            todolist : useSelector(state => state.todos.todolist),
        },
        callbacks : {
            deleteTodo : (id) => dispatch(TodoActionCreator.deleteTodo(id)),
            toggleDone : (id) => dispatch(TodoActionCreator.toggleDone(id))
        }
    }

    return (
        <TodoList {...propsObject} />
    );
};

export default TodoListContainer;

