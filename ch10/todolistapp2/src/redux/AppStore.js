import { createStore } from 'redux';
import RootReducer from './RootReducer';

const AppStore = createStore(RootReducer);
export default AppStore;
