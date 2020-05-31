import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { toggleTodoAction, deleteTodoAction, saveTodoAction } from '../../redux/actions/todoActions'
import { State } from '../../redux'

import ListContainer from './components/ListContainer'
import ListItem from './components/ListItem'
import Checkbox from './components/Checkbox'
import Remove from './components/Remove'
import Label from './components/Label'

// import { Container } from './styles';

const TodoList: React.FC = () => {
  const todos = useSelector((state: State) => state.todos)
  const dispatch = useDispatch()

  function onToggle(id: string) {
    dispatch(toggleTodoAction(id))
    dispatch(saveTodoAction())
  }

  function onDelete(id: string) {
    dispatch(deleteTodoAction(id))
    dispatch(saveTodoAction())
  }

  return (
      <ListContainer>
        {
          todos.map(todo => (
            <ListItem onClick={(e) => onToggle(todo.id)} key={todo.id}>
              <div>
                <Checkbox 
                  checked={todo.complete}
                  onChange={() => null}
                />
                <Label checked={todo.complete}>{todo.name}</Label>
              </div>
              <Remove onClick={(e) => onDelete(todo.id)} className="delete-button">-</Remove>
            </ListItem>
          ))
        }
      </ListContainer>
  )
}

export default TodoList;