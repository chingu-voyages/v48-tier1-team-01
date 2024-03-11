import axios from 'axios'
import { useEffect, useState } from 'react'
import DinoList from './components/DinoList'

function App() {
  const [dino, setDino] = useState([])
  useEffect(() => {
    axios.get(`https://chinguapi.onrender.com/dinosaurs`).then(res => setDino(res.data))
  }, [])

  return (
    <>
      <h1>Welcome to Dinasaur App</h1>
      <DinoList dinoList={dino} />
    </>
  )
}

export default App
