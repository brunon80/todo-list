import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
} from '../actions/actionTypes'
import { Todo } from '../actions/todoActions'
// import {v4 as uudi} from 'uuid'

type Action = {
    type: string,
    payload: any
}

function todosReducer(todos: Array<Todo> = [], { type, payload }: Action) {
    switch (type) {
        case ADD_TODO:
            return  [...todos, payload]
            
        case TOGGLE_TODO:
            return todos.map(todo => (todo.id === payload) ? { ...todo,  isDone: !todo.isDone  }: todo)
            
        case DELETE_TODO:
            return todos.filter(todo => todo.id !== payload)

        default:
            return todos
    }
}



export default todosReducer