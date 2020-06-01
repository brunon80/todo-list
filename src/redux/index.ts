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

/**
 * Por simplicidade vou por esse middleware aqui
 * Ele é responsável por salvar o estado atual da aplicação no localstorage
 */
const persistedState = JSON.parse(localStorage.getItem('todoAppState') || '{}')

const store = createStore(todoApp, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

/** 
 * Aqui nos inscrevemos por mudanças na store e as armazenamos no localstorage
*/
store.subscribe(() => {
    localStorage.setItem('todoAppState', JSON.stringify(store.getState()))
})

export default store