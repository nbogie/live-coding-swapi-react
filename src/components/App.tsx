import './App.css';
import { toast } from 'react-toastify';
import { useState } from 'react';


function App() {

  const [personString, setPersonString] = useState<string | null>(null);

  async function handleFetchButtonClicked() {
    fetchAndStore()
  }

  async function fetchAndStore() {
    logForMe("starting fetch")
    const swapiPersonURL = "https://swapi.dev/api/people/1"
    const resp = await fetch(swapiPersonURL)
    const obj = await resp.json()

    const str = JSON.stringify(obj, null, 2)
    setPersonString(str);
    logForMe(str)
  }

  function logForMe(str: string) {
    console.log(str);
    toast(str);
  }

  return (
    <div className="App">
      <h1>Star Wars People</h1>
      <button onClick={handleFetchButtonClicked}>Fetch People</button>
      {personString ? <pre>{personString}</pre> : <p>no data yet</p>}
    </div>
  )
}

export default App
