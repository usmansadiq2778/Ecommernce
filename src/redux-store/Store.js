import { reducers } from './reducers';
// import { createStore } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
// import { applyMiddleware } from 'redux';
const store = configureStore({
    reducer: reducers,

    middleware: [thunk],
});
export default store;
