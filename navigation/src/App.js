import dinoLogo from './img/DinoLogo.png';
import hamBurger from './img/hamburger.png';
import cross from './img/cross.png';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav dinoLogo={dinoLogo} hamBurger={hamBurger} cross={cross}/>
    </div>
  );
}

export default App;
