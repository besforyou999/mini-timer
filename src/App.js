import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './features/counter/counterSlice';
import './App.css';

function App() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>

        <div>
          <span>{count}</span>
        </div>
    </div>
  );
}

export default App;
