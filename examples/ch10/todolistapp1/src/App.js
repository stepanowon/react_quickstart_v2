import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import TodoList from './pages/TodoList';
import AddTodo from './pages/AddTodo';
import EditTodo from './pages/EditTodo';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
    <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/todos" component={TodoList} />
          <Route path="/todos/add" component={AddTodo} />
          <Route path="/todos/edit/:id" component={EditTodo} />
          <Route component={NotFound} />
        </Switch>
    </div>
</Router>
  );
};

export default App;