import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Map from './components/map';

function App() {
  return (
    <div className="App flex flex-col">
      <Header></Header>
      <Map></Map>
    </div>
  );
}

export default App;
