import React, { Component } from "react";
import produce from "immer";

const TodoListContext = React.createContext();

class TodoListProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [
        { no: 1, todo: "React학습1", done: false },
        { no: 2, todo: "React학습2", done: false },
        { no: 3, todo: "React학습3", done: true },
        { no: 4, todo: "React학습4", done: false }
      ]
    };
  }

  addTodo = todo => {
    const newTodoList = produce(this.state.todolist, draft => {
      draft.push({ no: new Date().getTime(), todo: todo, done: false });
    });
    this.setState({ todolist: newTodoList });
  };

  deleteTodo = no => {
    const index = this.state.todolist.findIndex(item => item.no === no);
    const newTodoList = produce(this.state.todolist, draft => {
      draft.splice(index, 1);
    });
    this.setState({ todolist: newTodoList });
  };

  toggleDone = no => {
    const index = this.state.todolist.findIndex(item => item.no === no);
    const newTodoList = produce(this.state.todolist, draft => {
      draft[index].done = !draft[index].done;
    });
    this.setState({ todolist: newTodoList });
  };

  render() {
    const values = {
      state: this.state,
      actions: {
        addTodo: this.addTodo,
        deleteTodo: this.deleteTodo,
        toggleDone: this.toggleDone
      }
    };

    return (
      <TodoListContext.Provider value={values}>
        {this.props.children}
      </TodoListContext.Provider>
    );
  }
}

const TodoListConsumer = TodoListContext.Consumer;

export { TodoListProvider, TodoListConsumer };
