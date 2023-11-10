import logo from './logo.svg';
import bgImage from './video/background-img.mp4'
import './App.css';
import InitialScreen from './Components/InitialScreen';
function App() {
  return (
    <div className="App">
      <video autoPlay loop muted>
        <source src={bgImage} type='video/mp4' />
      </video>
      <InitialScreen/>
    </div>
  );
}

export default App;
