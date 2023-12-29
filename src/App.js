import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload this shitty code.
          Editing this code is actually fun, because you can emediately see the result after pressing 
          <kbd>Esc</kbd> and writing <code>:w</code> and pressing <kbd>Enter</kbd> 
          and yes I am trying to get used to vim.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
