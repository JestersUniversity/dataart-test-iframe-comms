import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import './App.css';

function App() {
  async function testGetContacts(){
    console.log('Starting...');

    let baseUrl = 'https://fctgcorporate--dataart2.sandbox.lightning.force.com';
    let url = '/services/data/v20.0/sobjects/Account';

    const cors = require('cors')
    
    axios(baseUrl+url, {
      method: 'GET',
      mode: 'no-cors',
      headers: {},
      withCredentials: false,
      crossdomain: true,
    }).then(response => {
      console.log('response', response);
    })
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
