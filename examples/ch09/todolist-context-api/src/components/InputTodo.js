import React, { useState } from "react";
import { TodoListConsumer } from "../context/TodoListContext";

const InputTodo = () => {
  let [todo, setTodo] = useState("");

  return (
    <TodoListConsumer>
      {value => (
        <div className="row">
          <div className="col">
            <div className="input-group">
              <input id="msg" type="text" className="form-control" name="msg"
                placeholder="할일을 여기에 입력!" value={todo} onChange={(e) => setTodo(e.target.value)}
              />
              <span className="btn btn-primary input-group-addon" onClick={() => {
                  value.actions.addTodo(todo);
                  setTodo("");
                }}>
                추가
              </span>
            </div>
          </div>
        </div>
      )}
    </TodoListConsumer>
  );
};

export default InputTodo;
