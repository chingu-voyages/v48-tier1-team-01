import dinoLogo from './img/DinoLogo.png';
import hamBurger from './img/hamburger.png';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav dinoLogo={dinoLogo} hamBurger={hamBurger}/>
    </div>
  );
}

export default App;
