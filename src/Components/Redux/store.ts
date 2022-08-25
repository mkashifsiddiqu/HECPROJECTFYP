/* eslint-disable prettier/prettier */
import { legacy_createStore } from 'redux'
import rootReducer from './reducer/index'

const store = legacy_createStore(rootReducer);

export default store;
