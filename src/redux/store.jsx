import { createStore } from "redux";
import ReducerTodo from "./ReducerTodo";


const store = createStore(ReducerTodo, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 

export default store;