// src/redux/store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // Correct path relative to store.js

const store = createStore(rootReducer);

export default store;
