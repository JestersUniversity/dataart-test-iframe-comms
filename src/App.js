import logo from './logo.svg';
import './App.css';

function App() {
  function testGetContacts(){
    alert('Testing');
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={testGetContacts}>Click To Get Contacts</button>
      </header>
    </div>
  );
}

export default App;
