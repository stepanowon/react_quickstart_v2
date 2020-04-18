import { combineReducers } from 'redux';
import TimeReducer from './TimeReducer';
import TodoReducer from './TodoReducer';

const RootReducer = combineReducers({ home : TimeReducer, todos: TodoReducer });
export default RootReducer;
