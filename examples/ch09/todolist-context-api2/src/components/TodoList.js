import React, { useContext } from "react";
import TodoListContext from "../context/TodoListContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const value = useContext(TodoListContext);
  return (
    <div className="row">
        <div className="col">
            <ul className="list-group">
                {value.state.todolist.map(item => (
                <TodoItem key={item.no} todoItem={item}
                    deleteTodo={value.actions.deleteTodo} toggleDone={value.actions.toggleDone} />
                ))}
            </ul>
        </div>
    </div>
  );
};

export default TodoList;
