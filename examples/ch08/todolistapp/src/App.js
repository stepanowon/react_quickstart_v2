import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import TodoList from './pages/TodoList';
import AddTodo from './pages/AddTodo';
import EditTodo from './pages/EditTodo';
import NotFound from './pages/NotFound';
import Loading from './components/Loading';

const App = (props) => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/todos" render={ (rprops)=> 
            <TodoList {...rprops} states={props.states} callbacks={props.callbacks} />
          } />
          <Route path="/todos/add"  render={ (rprops)=> 
            <AddTodo {...rprops} callbacks={props.callbacks} />
          } />
          <Route path="/todos/edit/:id" render={ (rprops)=> 
            <EditTodo {...rprops} callbacks={props.callbacks} />
          } />
          <Route component={NotFound} />
        </Switch>
      </div>
      { props.states.isLoading ? <Loading /> : "" }
    </Router>
  );
};

App.propTypes = {
  states : PropTypes.object.isRequired,
  callbacks : PropTypes.object.isRequired,
};

export default App;