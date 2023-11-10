import logo from './logo.svg';
import bgImage from './video/background-img.mp4'
import './App.css';
import InitialScreen from './Components/InitialScreen';
import CardExample from './Components/CardExample';

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted>
        <source src={bgImage} type='video/mp4' />
      </video>
      <InitialScreen/>
      <CardExample/>
    </div>
  );
}

export default App;
