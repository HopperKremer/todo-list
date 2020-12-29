// Combining All Reducers
import {combineReducers} from 'redux'
// import listReducer from './todo-list/todoList.reducer'

import listReducer from "./todo-list/todo-list.reducer";

const rootReducer =  combineReducers({
    todoList: listReducer,
})

export default rootReducer

//custom button, form input, list component
//pages: home todo