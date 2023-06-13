import './App.css';
import CounterApp from './Counter';
import { Store } from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={Store}>
      <CounterApp />
    </Provider>
  );
}

export default App;
