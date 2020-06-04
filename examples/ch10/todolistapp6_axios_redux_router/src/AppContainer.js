import React  from 'react';
import App from './App';
import { useSelector, useDispatch } from 'react-redux';
import TodoActionCreator from './redux/TodoActionCreator';

const AppContainer = ()=> {
    const dispatch = useDispatch();
    const failCallback = (message) => {
      alert(message)
    }
    var propsObject = {
        states : { isloading : useSelector(state => state.isloading)    },
        callbacks : { fetchTodoList : () => dispatch(TodoActionCreator.asyncFetchTodoList(failCallback)) }
    }
  
    return (
        <App {...propsObject} />
    );
}
  
export default AppContainer;