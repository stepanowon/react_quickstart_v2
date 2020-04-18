import React, { useReducer, useState } from "react";
import produce from "immer";

const Constant = {
  ADD_TODO: "addTodo",
  DELETE_TODO: "deleteTodo"
};

let ts = new Date().getTime();

const initialState = {
  todolist: [
    { id: ts + 1, todo: "할일1" },
    { id: ts + 2, todo: "할일2" },
    { id: ts + 3, todo: "할일3" },
    { id: ts + 4, todo: "할일4" }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case Constant.ADD_TODO:
      return produce(state, draft => {
        draft.todolist.push({
          id: new Date().getTime(),
          todo: action.payload.todo
        });
      });
    case Constant.DELETE_TODO:
      let index = state.todolist.findIndex(
        item => item.id === action.payload.id
      );
      return produce(state, draft => {
        draft.todolist.splice(index, 1);
      });
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todo, setTodo] = useState("");

  return (
    <div>
      <input type="text" onChange={e => setTodo(e.target.value)} value={todo} />
      <button
        onClick={() => {
          dispatch({ type: Constant.ADD_TODO, payload: { todo: todo } });
          setTodo("");
        }}
      >
        Add Todo
      </button>
      <ul>
        {state.todolist.map(item => (
          <li key={item.id}>
            {item.todo}
            &nbsp;&nbsp;
            <button
              onClick={() =>
                dispatch({
                  type: Constant.DELETE_TODO,
                  payload: { id: item.id }
                })
              }
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
