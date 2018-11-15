import React, { Component } from 'react';
import './App.css';
import Keys from './Keys';
import './styles/piano.css';

const WEB_SOCKET_URL = process.env.WEB_SOCKET_URL ? process.env.WEB_SOCKET_URL : 'ws://localhost:3001';

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
        <div>
          Key Board Container
          <div> Keys</div>
          <div class="piano">
            <div class="piano-key">
              <div class="white-key"> w </div>
              <div class="black-key"> b </div>
            </div>
            <div class="piano-key">
              <div class="white-key"> w </div>
              <div class="black-key"> b</div>
            </div>
            <div class="piano-key">
              <div class="white-key"> w </div>
              <div class="white-key"> w </div>
            </div>
            <div class="piano-key">
              <div class="black-key"> b </div>
              <div class="white-key"> w </div>
            </div>
            <div class="piano-key">
              <div class="white-key"> w </div>
              <div class="black-key"> b </div>
            </div>
            <div class="piano-key">
              <div class="white-key"> b </div>
              <div class="black-key"> w </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
