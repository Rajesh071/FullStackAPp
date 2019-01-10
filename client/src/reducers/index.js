import {combineReducers} from "redux";
import authReducer from './authReducer';
 //mport {items,itemsHasErrored,itemsIsLoading} from './items'
export default combineReducers({ auth:authReducer});