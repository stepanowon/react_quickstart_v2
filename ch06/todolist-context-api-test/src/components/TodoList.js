import React from "react";
import { TodoListConsumer } from "../context/TodoListContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <TodoListConsumer>
      {value => (
        <div className="row">
          <div className="col">
          <ul className="list-group">
            {value.state.todolist.map(item => (
              <TodoItem
                key={item.no}
                todoItem={item}
                deleteTodo={value.actions.deleteTodo}
                toggleDone={value.actions.toggleDone}
              />
            ))}
          </ul>
          </div>
        </div>
      )}
    </TodoListConsumer>
  );
};

export default TodoList;
