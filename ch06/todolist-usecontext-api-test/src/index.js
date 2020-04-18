import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./components/App";
import { TodoListProvider } from "./context/TodoListContext";

ReactDOM.render(
  <TodoListProvider>
    <App />
  </TodoListProvider>,
  document.getElementById("root")
);
