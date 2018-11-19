import React, { Component } from 'react';
import './App.scss';
import { Keyboard } from './Keyboard.jsx';

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
          key: 'a',
        },
        {
          name: 'cs',
          sharp: true,
          key: 'w',
        },
        {
          name: 'd',
          sharp: false,
          key: 's',
        },
        {
          name: 'ds',
          sharp: true,
          key: 'e',
        },
        {
          name: 'e',
          sharp: false,
          key: 'd',
        },
        {
          name: 'f',
          sharp: false,
          key: 'f',
        },
        {
          name: 'fs',
          sharp: true,
          key: 't',
        },
        {
          name: 'g',
          sharp: false,
          key: 'g',
        },
        {
          name: 'gs',
          sharp: true,
          key: 'y',
        },
        {
          name: 'a',
          sharp: false,
          key: 'h',
        },
        {
          name: 'as',
          sharp: true,
          key: 'u',
        },
        {
          name: 'b',
          sharp: false,
          key: 'j',
        },
      ],
      drums: {
        drum: false,
        // loop: true,
      },
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
          if (this.state.drums.drum === false) {
            this.setState({
              drums: {
                drum: true,
              },
            });
          }
          if (this.state.drums.drum === true) {
            let drumSound = new Audio(`/music/drumloop.mp3`);
            drumSound.loop = true;
            drumSound.volume = 0.1;
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
      this.sounds[noteName].volume = 1;

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
