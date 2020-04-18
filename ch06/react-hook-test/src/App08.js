import React, { useReducer } from "react";

const Constant = {
  CHANGE_NAME: "changeName"
};

const reducer = (state, action) => {
  switch (action.type) {
    case Constant.CHANGE_NAME:
      return { name: action.payload.name };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { name: "" });

  return (
    <div>
      <input
        type="text"
        value={state.name}
        onChange={e =>
          dispatch({
            type: Constant.CHANGE_NAME,
            payload: { name: e.target.value }
          })
        }
      />
      <div>Hello {state.name}</div>
    </div>
  );
};

export default App;
