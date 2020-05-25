import React, { useState } from 'react';
import App from './App';

import produce from 'immer';

const AppContainer = () => {
    let [todolist, setTodoList] = useState([
        { id:1, todo:"ES6학습", desc:"설명1", done:false },
        { id:2, todo:"React학습", desc:"설명2", done:false },
        { id:3, todo:"ContextAPI 학습", desc:"설명3", done:true },
        { id:4, todo:"야구경기 관람", desc:"설명4", done:false },
    ])

    const addTodo = (todo, desc) => {
        let newTodolist = produce(todolist, (draft)=> {
            draft.push({ id:new Date().getTime(), todo, desc, done:false })
        })
        setTodoList(newTodolist);
    }

    const deleteTodo = (id) => { 
        let index = todolist.findIndex((todo)=> todo.id === id);
        let newTodolist = produce(todolist, (draft)=> {
            draft.splice(index,1);
        })
        setTodoList(newTodolist);
    }

    const toggleDone = (id) => { 
        let index = todolist.findIndex((todo)=> todo.id === id);
        let newTodolist = produce(todolist, (draft)=> {
            draft[index].done = !draft[index].done;
        })
        setTodoList(newTodolist);
    }

    const updateTodo = (id, todo, desc, done) => {
        let index = todolist.findIndex((todo)=> todo.id === id);
        let newTodolist = produce(todolist, (draft)=> {
           draft[index] = { ...draft[index], todo, desc, done }
        })
        setTodoList(newTodolist);
    }

    const getTodoOne = (id) => todolist.find((todo)=>todo.id === parseInt(id,10));

    const callbacks = { addTodo, deleteTodo, updateTodo, toggleDone, getTodoOne };
    const states = { todolist };

    return (
        <App callbacks={callbacks} states={states} />
    );
};

export default AppContainer;