import logo from './logo.svg';
import './App.css';
import Routing from './Components/routing';

import Login from './Components/login';
import Signup from './Components/signup';
import ExpenseTracker from './Components/main';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
       <Routing/>
    </div>
  );
}

export default App;
