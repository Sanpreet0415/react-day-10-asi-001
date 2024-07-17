import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'; // Import your combined reducers
import thunk from 'redux-thunk'; // If using redux-thunk for async actions

const store = createStore(
  rootReducer, // Combined reducers
  applyMiddleware(thunk) // Apply middleware if needed
);

export default store;
