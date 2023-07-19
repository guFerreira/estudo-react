import './App.css';
import CardDog from './components/CardDog';

function App() {
  return (
    <div className="container-cards">
      <CardDog id='cardUm'></CardDog>
      <CardDog id='cardDois'></CardDog>
      <CardDog id='cardTres'></CardDog>
    </div>
  );
}

export default App;
