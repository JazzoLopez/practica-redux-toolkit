import React from 'react'
import TaskList from './components/TaskList.jsx'
import TaskForm from './components/Taskform.jsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path='/nueva-tarea' element={<TaskForm />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App