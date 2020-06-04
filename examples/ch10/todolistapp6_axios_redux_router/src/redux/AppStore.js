import { createStore, applyMiddleware } from 'redux';
import TodoReducer from './TodoReducer';
import thunk from 'redux-thunk';
import TodoActionCreator from './TodoActionCreator';
import { composeWithDevTools } from 'redux-devtools-extension';
import invariant from 'redux-immutable-state-invariant';

let AppStore;
if (process.env.NODE_ENV === "development") {
    const composeEnhancers = composeWithDevTools(TodoActionCreator);
    AppStore = createStore(TodoReducer, composeEnhancers(
        applyMiddleware(invariant(), thunk)
    ));
} else {
    AppStore = createStore(TodoReducer, applyMiddleware(thunk));
}

export default AppStore;