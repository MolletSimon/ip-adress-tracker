import './App.css';
import Header from './components/header';
import Map from './components/map';
import { useState } from 'react';

function App() {
  const [infos, setInfos] = useState({});
  return (
    <div className="App flex flex-col">
      <Header setInfos={setInfos} infos={infos}></Header>
      <Map infos={infos}></Map>
    </div>
  );
}

export default App;
