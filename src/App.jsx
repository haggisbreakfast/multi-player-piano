import React, { Component } from 'react';
import './App.css';
import Keyboard from './Keyboard.jsx';
import './styles/piano.css';

const WEB_SOCKET_URL = process.env.REACT_APP_WEB_SOCKET_URL
  ? process.env.REACT_APP_WEB_SOCKET_URL
  : 'ws://localhost:3001';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCount: 0,
    };
    // create a websocket connection to our server
    this.socket = new WebSocket(WEB_SOCKET_URL);
    // this.addMessage = this.addMessage.bind(this);
    console.log(WEB_SOCKET_URL);
  }

  // loads below once component mounted to DOM
  componentDidMount() {
    // when connection with websockets is open..
    this.socket.onopen = () => {
      console.log('Connected');
    };
    // receiving data from websocket server
    this.socket.onmessage = (event) => {
      let parsedData = JSON.parse(event.data);
      this.setState({
        userCount: parsedData.count,
      });
      console.log(parsedData.count);
    };
  }

  render() {
    return (
      <div className="App">
        <div className="logo">
          <h1>WUTEVER THIS IS GUNA B CALLED</h1>
          <h1># of players: {this.state.userCount}</h1>
        </div>
        <Keyboard />
      </div>
    );
  }
}

export default App;
