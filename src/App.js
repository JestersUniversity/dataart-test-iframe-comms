import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import './App.css';

function App() {
  async function testGetContacts(){
    console.log('Starting...');

    const response = await axios.get('https://fctgcorporate--dataart2.sandbox.lightning.force.com/services/data/v57.0/sobjects/Account/0013M00001HsuUKQAZ');
    console.log('response  ', response);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={testGetContacts}>Click To Get Contacts</Button>
      </header>
    </div>
  );
}

export default App;
