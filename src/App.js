import { useSelector } from 'react-redux';
import './App.css';
import LButton from './components/LButton';
import RButton from './components/RButton';


function App() {

  const count = useSelector((state) => state.counter.value);

  return (
    <div className="App">
        <div>
          <LButton></LButton>
          <RButton></RButton>
        </div>

        <div>
          <span>{count}</span>
        </div>
    </div>
  );
}

export default App;