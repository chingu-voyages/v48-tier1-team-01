import axios from 'axios';
import { useEffect, useState } from 'react';
import DinoList from './components/DinoList';
import SearchDino from './components/SearchDino';
import DinoDetails from './components/DinoDetails';
import DietChart from './components/DietChart/DietChart';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { FaGithub } from 'react-icons/fa';

// images
import dinoLogo from './assets/images/DinoLogo.png';
import hamBurger from './assets/images/hamburger.png';
import cross from './assets/images/cross.png';

// router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [dinoQuery, setDinoQuery] = useState([]);
  const [dinoSearch, setDinoSearch] = useState('');
  const [dinoId, setDinoId] = useState(0);

  useEffect(() => {
    axios
      .get(`https://chinguapi.onrender.com/dinosaurs`)
      .then((res) => setDinoQuery(res.data));
  }, []);

  return (
    <BrowserRouter>
      <Nav dinoLogo={dinoLogo} hamBurger={hamBurger} cross={cross} />
      <main className="grid grid-rows-auto w-full gap-5 p-5">
        <h1 className="text-center text-3xl">Welcome to Dinosaur App</h1>
        <Routes>
          <Route
            path="/v48-tier1-team-01"
            element={
              <>
                <SearchDino
                  dinoSearch={dinoSearch}
                  onDinoSearch={setDinoSearch}
                />
                {dinoId === 0 && (
                  <DinoList
                    dinoQuery={dinoQuery}
                    dinoSearch={dinoSearch}
                    onSelectedDino={(id) => setDinoId(id)}
                  />
                )}
                {dinoId !== 0 && (
                  <DinoDetails
                    dino={dinoQuery[dinoId - 1]}
                    onBack={() => setDinoId(0)}
                  />
                )}
              </>
            }
          />
          <Route path="/v48-tier1-team-01/chart" element={<DietChart />} />
        </Routes>
      </main>
      <Footer icon={<FaGithub />} />
    </BrowserRouter>
  );
}

export default App;
