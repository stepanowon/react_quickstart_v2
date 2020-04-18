import React, { Component } from 'react';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="card card-body">
                    <div className="title">:: Todolist App</div>
                </div>
                <div className="card card-default card-borderless">
                    <div className="card-body">
                        <InputTodo />
                        <TodoList />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;