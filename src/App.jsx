import axios from 'axios'
import { useEffect, useState } from 'react'
import DinoList from './components/DinoList'

function App() {
  const [dinoQuery, setDinoQuery] = useState([])
  useEffect(() => {
    axios.get(`https://chinguapi.onrender.com/dinosaurs`).then(res => setDinoQuery(res.data))
  }, [])

  return (
    <>
      <h1>Welcome to Dinasaur App</h1>
      <DinoList dinoQuery={dinoQuery} />
    </>
  )
}

export default App
