import axios from 'axios'
import { useEffect, useState } from 'react'
import DinoList from './components/DinoList'
import SearchDino from './components/SearchDino'
import DinoDetails from './components/DinoDetails'

function App() {
  const [dinoQuery, setDinoQuery] = useState([])
  const [dinoSearch, setDinoSearch] = useState('')
  const [dinoId, setDinoId] = useState(0)

  useEffect(() => {
    axios.get(`https://chinguapi.onrender.com/dinosaurs`).then(res => setDinoQuery(res.data))
  }, [])

  return (
    <main className='grid  grid-rows-auto  justify-center w-full gap-5 p-5'>
      <h1 className='text-center text-3xl'>Welcome to Dinasaur App</h1>
      <SearchDino dinoSearch={dinoSearch} onDinoSearch={setDinoSearch} />
      {dinoId == 0 && (
        <DinoList
          dinoQuery={dinoQuery}
          dinoSearch={dinoSearch}
          onSelectedDino={id => setDinoId(id)}
        />
      )}
      {dinoId != 0 && <DinoDetails dino={dinoQuery[dinoId]} onBack={() => setDinoId(0)} />}
    </main>
  )
}

export default App
