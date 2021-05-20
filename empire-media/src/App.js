import Stock from './components/Stock/Stock'
import {STOCK_TYPE} from './config/config'
import './App.css';

function App() {
  return (
    <div className="App">
      <Stock stockType={STOCK_TYPE.Apple}/>
    </div>
  );
}

export default App;
