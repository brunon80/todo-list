import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './actionTypes'

export type Todo = {
    id: string,
    name: string,
    complete: boolean,
}

export const addTodoAction = (todo: Todo) => ({
    type: ADD_TODO,
    payload: todo
})

export const toggleTodoAction = (todoId: string) => ({
    type: TOGGLE_TODO,
    payload: todoId
})

export const deleteTodoAction = (todoId: string) => ({
    type: DELETE_TODO,
    payload: todoId
})
