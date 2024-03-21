import Card from './components/Card';
import sampleImage from './img/sampleImage.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card sampleImage={sampleImage}/>
    </div>
  );
}

export default App;
