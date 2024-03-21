import Footer from './components/Footer';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import './App.css';

function App() {
  const [icon, setIcon] = useState(()=>{
    return(
      <FaGithub />
    )
  });
  return (
    <div className="App">
      <Footer icon={ icon }/>
    </div>
  );
}

export default App;
