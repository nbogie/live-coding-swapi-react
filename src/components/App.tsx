import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import './App.css'

function App() {


  function handleFetchButtonClicked() {
    console.log("handle fetch button clicked")
  }
  return (
    <div className="App">
      <h1>Hello Star Wars fans or everyone else</h1>
      <button onClick={handleFetchButtonClicked}>Fetch People</button>
    </div>

  )
}

export default App
