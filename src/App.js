import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import './App.css';

function App() {
  async function testGetContacts(){
    console.log('Starting...');

    let url = 'https://fctgcorporate--dataart2.sandbox.lightning.force.com/services/data/v57.0/sobjects/Account/0013M00001HsuUKQAZ';
    
    axios(url, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      credentials: false,
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
