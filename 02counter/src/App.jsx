import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter, setCounter] = useState(15)

  //let counter = 15

  const addValue = () => {
    // console.log("clicked", counter)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    // setCounter(counter)
  }

  const removeValue = () =>{
   setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai or react</h1>
      <h2>Counter Value : {counter}</h2>

      <button
        on onClick={addValue}
      >Add Value {counter} </button>
      <br />
      <br />
      <button
      on onClick={removeValue}
      >Remove Value {counter} </button>
      <p>footer : {counter} </p>
    </>
  )
}

export default App
