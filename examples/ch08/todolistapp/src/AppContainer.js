import React, { useState, useEffect } from 'react';
import App from './App';
import produce from 'immer';
import axios from 'axios';

const USER = "gdhong";
const BASEURI = "/api/todolist_long/" + USER;


const AppContainer = () => {
    let [todolist, setTodoList] = useState([]);
    let [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchTodoList();
    }, []);

    const fetchTodoList = () => {
        setTodoList([]);
        setIsLoading(true);
        axios.get(BASEURI)
        .then((response)=> {
            setTodoList(response.data);
            setIsLoading(false);
        })
    }

    const addTodo = (todo, desc, callback) => {
        setIsLoading(true);
        axios.post(BASEURI, { todo, desc })
        .then((response)=> {
            if (response.data.status === "success") {
                let newTodolist = produce(todolist, (draft)=> {
                    draft.push({ ...response.data.item, done:false })
                })
                setTodoList(newTodolist);
                callback();
            } else {
                alert("연락처 추가 실패 : " + response.data.message);
            }
            setIsLoading(false);
        })
        .catch((error)=> {
            setIsLoading(false);
            alert("연락처 추가 실패 : " + error);
        })
    }

    const deleteTodo = (id) => { 
        setIsLoading(true);
        axios.delete(`${BASEURI}/${id}`)
        .then((response)=>{
            if (response.data.status === "success") {
                let index = todolist.findIndex((todo)=> todo.id === id);
                let newTodolist = produce(todolist, (draft)=> {
                    draft.splice(index,1);
                })
                setTodoList(newTodolist);
            } else {
                alert("연락처 삭제 실패 : " + response.data.message);
            }
            setIsLoading(false);
        })
        .catch((error)=>{
            setIsLoading(false);
            alert("연락처 삭제 실패 : " + error);
        })
    }

    const toggleDone = (id) => { 
        setIsLoading(true);
        let todoitem = todolist.find((todo)=> todo.id === id);
        axios.put(`${BASEURI}/${id}`, { ...todoitem, done:!todoitem.done })
        .then((response)=>{
            if (response.data.status === "success") {
                let index = todolist.findIndex((todo)=> todo.id === id);
                let newTodolist = produce(todolist, (draft)=> {
                    draft[index].done = !draft[index].done;
                })
                setTodoList(newTodolist);
            } else {
                alert("연락처 수정 실패 : " + response.data.message);
            }
            setIsLoading(false);
        })
        .catch((error)=>{
            setIsLoading(false);
            alert("연락처 수정 실패 : " + error);
        })
    }

    const updateTodo = (id, todo, desc, done, callback) => {
        setIsLoading(true);
        axios.put(`${BASEURI}/${id}`, { todo, desc, done })
        .then((response)=>{
            if (response.data.status === "success") {
                let index = todolist.findIndex((todo)=> todo.id === id);
                let newTodolist = produce(todolist, (draft)=> {
                   draft[index] = { ...draft[index], todo, desc, done }
                })
                setTodoList(newTodolist);
                callback();
            } else {
                alert("연락처 수정 실패 : " + response.data.message);
            }
            setIsLoading(false);
        })
        .catch((error)=>{
            setIsLoading(false);
            alert("연락처 수정 실패 : " + error);
        })
    }

    const getTodoOne = (id) => todolist.find((todo)=>todo.id === parseInt(id,10));

    const callbacks = { addTodo, deleteTodo, updateTodo, toggleDone, getTodoOne, fetchTodoList };
    const states = { todolist, isLoading };

    return (
        <App callbacks={callbacks} states={states} />
    );
};

export default AppContainer;