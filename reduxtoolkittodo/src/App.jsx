import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2 className='text-2xl font-bold'>Learn about redux toolkit</h2>
    <p>Learn about state management in React applications.Learn about state management in React applications.Learn about state management in React applications.Learn about state management in React applications.Learn about state management in React applications.Learn about state management in React applications.</p>

    <AddTodo />
    <Todos />
    </>
  )
}

export default App
