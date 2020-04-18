import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
    const history = useHistory();
    
    let itemClassName = "list-group-item";
    if (props.todoitem.done) itemClassName +=" list-group-item-success";
    return (
        <li className={itemClassName}>
            <span className={props.todoitem.done ? "todo-done pointer": "pointer"}
                onClick={ ()=>props.callbacks.toggleDone(props.todoitem.id) }>
                {props.todoitem.todo}{ props.todoitem.done ? "(완료)" : "" } 
            </span>
            <span className="float-right badge badge-secondary pointer m-1" 
                onClick={ ()=>history.push('/todos/edit/'+props.todoitem.id) }>편집</span>
            <span className="float-right badge badge-secondary pointer m-1" 
                onClick={ ()=>props.callbacks.deleteTodo(props.todoitem.id) }>삭제</span>
        </li>
    );
};

TodoItem.propTypes = {
    todoitem : PropTypes.object.isRequired,
    callbacks : PropTypes.object.isRequired,
};

export default TodoItem;