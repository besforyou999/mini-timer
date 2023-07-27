import './App.css';
import {useState} from 'react';
import RButton from './components/RButton';
import LButton from './components/LButton';

function App() {

  const [roundCnt, setRoundCnt] = useState(0);

  return (
    <div className="App">
      <h1>Hello world</h1>
      <RButton/>
      <LButton/>
    </div>
  );
}

export default App;
