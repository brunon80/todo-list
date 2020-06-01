import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { addTodoAction } from '../../redux/actions/todoActions'

import Form from './components/Form'
import Input from './components/Input'
import Button from './components/Button'

// import { Container } from './styles';

const TodoInput: React.FC = () => {
    const [todo, setTodo] =  useState('')
    const dispatch = useDispatch()
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value)
    }

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        if (todo.trim() === '') return
        dispatch(addTodoAction({
            id: uuid(),
            name: todo,
            isDone: false,
        }))
        setTodo('')
    }
    return (
        <Form onSubmit={onSubmit} >
            <Input
                onChange={onChange}
                placeholder="Add todo"
                value={todo}
                type="text"
                name="todo"
                id="todo"
            />
            <Button type="submit">+</Button>
        </Form>
    )
}

export default TodoInput;