import './App.css';
import { toast } from 'react-toastify';
import { useState } from 'react';


function App() {
  type Person = string;
  const [person, setPerson] = useState<Person | null>(null);
  const [personNumber, setPersonNumber] = useState<number>(1);

  async function handleFetchButtonClicked() {
    fetchAndStore(personNumber)
  }

  async function fetchAndStore(personNumberToFetch: number) {
    const swapiPersonURL = "https://swapi.dev/api/people/" + personNumberToFetch
    logForMe("starting fetch: " + personNumberToFetch)
    const resp = await fetch(swapiPersonURL)
    const obj = await resp.json()

    const str = JSON.stringify(obj, null, 2)
    setPerson(str);
    logForMe(str)
  }

  function logForMe(str: string) {
    console.log(str);
    toast(str);
  }
  function handlePersonNumberChange(e: any) {
    const desiredPersonNumber = e.target.value;
    setPersonNumber(desiredPersonNumber);
    fetchAndStore(desiredPersonNumber)

  }

  return (
    <div className="App">
      <h1>Star Wars People</h1>
      <button onClick={handleFetchButtonClicked}>Fetch People</button>
      {person ? <pre>{person}</pre> : <p>no data yet</p>}
      <p>personNumber: {personNumber}</p>

      <input type="number"
        onChange={handlePersonNumberChange}
        value={personNumber}
        min={1} max={6}
      />

    </div>
  )
}

function pickRandom<T>(arr: T[]): T {
  const ix = Math.floor(Math.random() * arr.length);
  return arr[ix];
}

export default App
