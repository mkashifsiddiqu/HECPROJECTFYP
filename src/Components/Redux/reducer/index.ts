import {loginuserReducer} from './loginuserReducer';
import stdLoginReducer from './stdLoginReducer'
import loginFPReducer from './FPloginReducer';
import selectedDegree from './selectedDegree';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  loginuserReducer, //Admin
  loginFPReducer,   //Focal Person
  stdLoginReducer,   //Student
  selectedDegree, //In Student For Selected Degree Attesttaion
});

export default rootReducer;
