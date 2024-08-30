import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import employeesReducer from "./employeesReducer";

const rootReducer = combineReducers({
  employees: employeesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
window.store = store;

export default store;
