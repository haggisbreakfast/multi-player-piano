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
      drums: false,
    };
    // this.filename = `high-c.mp3`;
    // this.sound = new Audio(`/music/${this.filename}`);
    this.sounds = this.state.notes.reduce((prev, value) => {
      return {
        ...prev,
        [value.name]: new Audio(`/music/high-${value.name}.mp3`),
      };
    }, {});
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
      // switch case for different data types
      switch (parsedData.type) {
        case 'userCount':
          this.setState({
            userCount: parsedData.count,
          });
          break;
        case 'note':
          this.playSound(parsedData.note);
          console.log(parsedData.type);
          break;
        case 'drums':
          let drumSound = new Audio(`/music/drumloop.mp3`);
          if (this.state.drums === false) {
            this.setState({
              drums: true,
            });
          }
          if (this.state.drums === true) {
            drumSound.play();
          }
          break;
        default:
          console.log('no type');
      }
    };
  }

  playSound = (noteName) => {
    if (this.sounds[noteName]) {
      this.sounds[noteName].currentTime = 0;
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
        <Keyboard
          socket={this.socket}
          notes={this.state.notes}
          drums={this.state.drums}
        />
      </div>
    );
  }
}

export default App;
