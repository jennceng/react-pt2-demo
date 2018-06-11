import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

let composeFunctions = [
  applyMiddleware(thunkMiddleware),
];

const configureStore = () =>
  createStore(
    rootReducer,
    compose(...composeFunctions),
  );

export default configureStore;
