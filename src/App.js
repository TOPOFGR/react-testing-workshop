import logo from './logo.svg';
import './App.css';
import Mocked from './components/Mocked';

function App() {

  const onSubmit = () => {
    console.log('onSubmit');
  }

  return (
    <div className="App">
      <header className="App-header">
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
        <Mocked onSubmit={onSubmit}/>
      </header>
    </div>
  );
}

export default App;
