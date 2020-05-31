import { createStore, combineReducers } from 'redux'
import todoReducers from './reducers/todoReducers'
import { Todo } from './actions/todoActions'
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__:any;
    }
}

export type State = {
    todos: Array<Todo>
}

const todoApp = combineReducers({
    todos: todoReducers
})

export const store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
