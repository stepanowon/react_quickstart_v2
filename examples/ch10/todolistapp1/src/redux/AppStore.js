import { createStore } from 'redux';
import TodoReducer from './TodoReducer';

const AppStore = createStore(TodoReducer);
export default AppStore;
