import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  SAVE_TODO,
} from '../actions/actionTypes'
import { Todo } from '../actions/todoActions'
// import {v4 as uudi} from 'uuid'

type Action = {
    type: string,
    payload: any
}

function recoverState() {
    const todos = JSON.parse(localStorage.getItem('todos') || '') || []
    const initialState = [...todos]
    
    return initialState
}

function todosReducer(todos: Array<Todo> = recoverState(), { type, payload }: Action) {
    switch (type) {
        case ADD_TODO:
            return  [...todos, payload]
            
        case TOGGLE_TODO:
            return todos.map(todo => (todo.id === payload) ? { ...todo,  complete: !todo.complete  }: todo)
            
        case DELETE_TODO:
            return todos.filter(todo => todo.id !== payload)

        case SAVE_TODO:
            localStorage.setItem('todos', JSON.stringify(todos))
            return todos
                
        default:
            return todos
    }
}



export default todosReducer