import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { observer, inject  } from 'mobx-react';

@inject(stores => ({
    todolist: stores.todoStore.todolist,
    ongoingTodoCount : stores.todoStore.ongoingTodoCount,
    doneTodoCount : stores.todoStore.doneTodoCount,
}))
@observer
class TodoList extends Component {
    render() {
        let todoItems = this.props.todolist.map((item)=> {
            return (
                <TodoItem key={item.no} {...item} />
            )
        })

        return (
            <div>
                <div className="row">
                    <div className="col">
                        <ul className="list-group">
                            {todoItems}
                        </ul>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        진행중인 할일 : {this.props.ongoingTodoCount}
                    </div>
                    <div className="col">
                        완료된 할일 : {this.props.doneTodoCount}
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;