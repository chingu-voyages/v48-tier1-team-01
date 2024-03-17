import axios from 'axios'
import { useEffect, useState } from 'react'
import DinoList from './components/DinoList'
import SearchDino from './components/SearchDino'

function App() {
  const [dinoQuery, setDinoQuery] = useState([])
  const [dinoSearch, setDinoSearch] = useState('')

  useEffect(() => {
    axios.get(`https://chinguapi.onrender.com/dinosaurs`).then(res => setDinoQuery(res.data))
  }, [])

  return (
    <>
      <h1>Welcome to Dinasaur App</h1>
      <SearchDino dinoSearch={dinoSearch} onDinoSearch={setDinoSearch} />
      <DinoList dinoQuery={dinoQuery} dinoSearch={dinoSearch} />
    </>
  )
}

export default App
