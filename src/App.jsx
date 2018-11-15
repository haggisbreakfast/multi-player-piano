import React, { Component } from 'react';
import './App.css';
import Keys from './Keys.jsx';
import './styles/piano.css';

const WEB_SOCKET_URL = process.env.REACT_APP_WEB_SOCKET_URL
  ? process.env.REACT_APP_WEB_SOCKET_URL
  : 'ws://localhost:3001';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // create a websocket connection to our server
    this.socket = new WebSocket(WEB_SOCKET_URL);
    // this.addMessage = this.addMessage.bind(this);
    console.log(WEB_SOCKET_URL);
  }

  render() {
    return (
      <div className="App">
        <Keys />
      </div>
    );
  }
}

export default App;
