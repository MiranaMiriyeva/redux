import { combineReducers, createStore } from "redux";
import { counterReducer } from "../reducer/Counter.reducer";
import { listReducer } from "../reducer/List.reducer";

const reducers = combineReducers({
    counter: counterReducer,
    list: listReducer
})
export const globalState = createStore(reducers)