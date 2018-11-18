import React, { Component } from 'react';
import './App.css';
import { Keyboard } from './Keyboard.jsx';
import './styles/piano.css';

const WEB_SOCKET_URL = process.env.REACT_APP_WEB_SOCKET_URL
  ? process.env.REACT_APP_WEB_SOCKET_URL
  : 'ws://localhost:3001';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCount: 0,
      notes: [
        {
          name: 'c',
          sharp: false,
        },
        {
          name: 'cs',
          sharp: true,
        },
        {
          name: 'd',
          sharp: false,
        },
        {
          name: 'ds',
          sharp: true,
        },
        {
          name: 'e',
          sharp: false,
        },
        {
          name: 'f',
          sharp: false,
        },
        {
          name: 'fs',
          sharp: true,
        },
        {
          name: 'g',
          sharp: false,
        },
        {
          name: 'gs',
          sharp: true,
        },
        {
          name: 'a',
          sharp: false,
        },
        {
          name: 'as',
          sharp: true,
        },
        {
          name: 'b',
          sharp: false,
        },
      ],
    };
    this.filename = `high-c.mp3`;
    this.sound = new Audio(`/music/${this.filename}`);
    this.sounds = this.state.notes.reduce((prev, value) => {
      return {
        ...prev,
        [value.name]: new Audio(`/music/high-${value.name}.mp3`),
      };
    }, {});
    // a: new Audio(`/music/high-a.mp3`),
    // b: new Audio(`/music/high-b.mp3`),
    // c: new Audio(`/music/high-c.mp3`),
    // d: new Audio(`/music/high-d.mp3`),

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
      this.playSound(parsedData.note);
      console.log(parsedData);
      this.setState({
        userCount: parsedData.count,
      });
    };
  }

  playSound = (noteName) => {
    if (this.sounds[noteName]) {
      this.sounds[noteName].play();
    }
  };

  render() {
    return (
      <div className="App">
        <div className="logo">
          <h1>WUTEVER THIS IS GUNA B CALLED</h1>
          <h1># of players: {this.state.userCount}</h1>
        </div>
        <Keyboard socket={this.socket} notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
