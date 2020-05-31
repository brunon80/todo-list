import React from 'react';
import './App.css';

import { Provider } from 'react-redux'
import { store } from './redux'

import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import Container from './components/Container'
import Header from './components/Header'

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Header>Todo List</Header>
        <TodoList />
        <TodoInput/>
      </Container>
    </Provider>
  );
}

export default App;
