import { useState } from 'react'
import './assets/style.css'
import TodoForm from './components/TodoForm'
import Todolist from './components/Todolist'
function App() {

  return (
    <div className='main-div'>
    <h1>Todo App</h1>
    <TodoForm/>
    <Todolist/>
    </div>
  )
}

export default App
