import React from "react";
import ReactDOM from "react-dom";

import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    };

    window.addEventListener("message", function(event) {
      console.log('Origin '+ event.origin);
      console.log('data '+ event.data);
    });
  }
  
  async testGetContacts(){
    console.log('Starting...');

    let baseUrl = 'https://fctgcorporate--dataart2.sandbox.my.salesforce-sites.com/publicinteraction';
    let url = '/services/apexrest/publicrest?id=0013M00001HsuUKQAZ';

    const cors = require('cors')
    
    axios(baseUrl+url, {
      method: 'GET',
      mode: 'no-cors',
      headers: {},
      withCredentials: false,
      crossdomain: true,
    }).then(response => {
      console.log('response', response);
      this.setState({
        data: JSON.stringify(response)
      });
    })
  }

  render() {
    return (<div className="App">
      <header className="App-header">
        {
          !this.state.data && <Button onClick={this.testGetContacts.bind(this)}>Click To Get Account Details</Button>
        }
        {
          this.state.data && <textarea value={this.state.data} rows="4" cols="50" />
        }
      </header>
    </div>)
  };
}

export default App;
