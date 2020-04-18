import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    render() {
        let itemClassName = "list-group-item";
        if (this.props.todoitem.done) itemClassName +=" list-group-item-success";
        return (
            <li className={itemClassName}>
                <span className={this.props.todoitem.done ? "todo-done pointer": "pointer"}
                    onClick={ ()=>this.props.toggleDone(this.props.todoitem.no) }>
                    {this.props.todoitem.todo}{ this.props.todoitem.done ? "(완료)" : "" } 
                </span>
                <span className="float-right badge badge-secondary pointer" 
                    onClick={ ()=>this.props.deleteTodo(this.props.todoitem.no) }>삭제</span>
            </li>
        );
    }
}

TodoItem.propTypes = {
    todoitem : PropTypes.object.isRequired,
    toggleDone : PropTypes.func.isRequired,
    deleteTodo : PropTypes.func.isRequired,
};

export default TodoItem;