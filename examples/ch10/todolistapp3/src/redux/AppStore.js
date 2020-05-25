import { createStore, applyMiddleware } from 'redux';
import RootReducer from './RootReducer';
import thunk from 'redux-thunk';

const logger = (store) => (next) => (action) => {
    console.log("### action 실행 : ", action);
    console.log("### action 변경전 상태 : ", store.getState());
    next(action);
    console.log("### action 변경후 상태 : ", store.getState());
}

const AppStore = createStore(RootReducer, applyMiddleware(logger,thunk));
export default AppStore;
