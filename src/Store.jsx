import { createStore } from "redux";
import { todosReducer } from "./services/reducer/todosReducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";


const Store = createStore(todosReducer, applyMiddleware(thunk))

export default Store;
