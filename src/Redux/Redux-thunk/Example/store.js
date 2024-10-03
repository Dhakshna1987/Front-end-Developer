import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Root reducer combining other reducers

const store = createStore(rootReducer, applyMiddleware(thunk));
