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
          name: 'low-c',
          sharp: false,
          key: 'q',
        },
        {
          name: 'low-cs',
          sharp: true,
          key: '2',
        },
        {
          name: 'low-d',
          sharp: false,
          key: 'w',
        },
        {
          name: 'low-ds',
          sharp: true,
          key: '3',
        },
        {
          name: 'low-e',
          sharp: false,
          key: 'e',
        },
        {
          name: 'low-f',
          sharp: false,
          key: 'r',
        },
        {
          name: 'low-fs',
          sharp: true,
          key: '5',
        },
        {
          name: 'low-g',
          sharp: false,
          key: 't',
        },
        {
          name: 'low-gs',
          sharp: true,
          key: '6',
        },
        {
          name: 'low-a',
          sharp: false,
          key: 'y',
        },
        {
          name: 'low-as',
          sharp: true,
          key: '7',
        },
        {
          name: 'low-b',
          sharp: false,
          key: 'u',
        },
        {
          name: 'high-c',
          sharp: false,
          key: 'z',
        },
        {
          name: 'high-cs',
          sharp: true,
          key: 's',
        },
        {
          name: 'high-d',
          sharp: false,
          key: 'x',
        },
        {
          name: 'high-ds',
          sharp: true,
          key: 'd',
        },
        {
          name: 'high-e',
          sharp: false,
          key: 'c',
        },
        {
          name: 'high-f',
          sharp: false,
          key: 'v',
        },
        {
          name: 'high-fs',
          sharp: true,
          key: 'g',
        },
        {
          name: 'high-g',
          sharp: false,
          key: 'b',
        },
        {
          name: 'high-gs',
          sharp: true,
          key: 'h',
        },
        {
          name: 'high-a',
          sharp: false,
          key: 'n',
        },
        {
          name: 'high-as',
          sharp: true,
          key: 'j',
        },
        {
          name: 'high-b',
          sharp: false,
          key: 'm',
        },
      ],
      drums: {
        drum: false,
        // loop: true,
      },
      recording: {
        recording: false,
        events: [],
        currentTime: 0,
        currentEvents: [],
      },
    };
    // this.filename = `high-c.mp3`;
    // this.sound = new Audio(`/music/${this.filename}`);
    this.sounds = this.state.notes.reduce((prev, value) => {
      return {
        ...prev,
        [value.name]: new Audio(`/music/${value.name}.mp3`),
      };
    }, {});

    this.drumSound = new Audio(`/music/drumloop.mp3`);

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
          setImmediate(() => {
            console.log(parsedData);
          });
          break;
        case 'drums':
          if (this.state.drums.drum === false) {
            this.setState({
              drums: {
                drum: true,
              },
            });
            this.drumSound.loop = true;
            this.drumSound.volume = 0.2;
            this.drumSound.play();
            console.log('is tru now');
          } else if (this.state.drums.drum === true) {
            this.setState({
              drums: {
                drum: false,
              },
            });
            this.drumSound.pause();
            console.log('is false now');
          }
          break;
        default:
          console.log('no type');
      }
    };
  }

  playSound = (noteName) => {
    console.log(noteName);
    if (this.sounds[noteName]) {
      this.sounds[noteName].currentTime = 0;
      this.sounds[noteName].volume = 1;
      this.sounds[noteName].play();
    }
  };
  hitRecord = () => {
    this.socket.send(JSON.stringify({ type: 'record' }));
  };
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
      <img id="cloud-left" src ="/images/cloud.png"/>
      <img id="cloud-right" src ="/images/cloud.png"/>
        <h1>Bit-Note <iframe src="https://giphy.com/embed/3o7aD0IoxWQx4FRIUo" width="280" height="110" frameBorder="0" allowFullScreen></iframe></h1>
        <h3> Make music with your friends from anywhere!</h3>
        <img id="mario" src ="/images/drummer.gif"/>
=======
        <h1>
          Bit-Note{' '}
          <iframe
            src="https://giphy.com/embed/3o7aD0IoxWQx4FRIUo"
            width="280"
            height="110"
            frameBorder="0"
            allowFullScreen
          />
        </h1>
        <img src={'./src/cloud.png'} />
        <h3>Make music with your friends from anywhere!</h3>
>>>>>>> 51f18a43188d837f6083f0a2a6fd362cf3840d53
        <Keyboard
          socket={this.socket}
          notes={this.state.notes}
          drums={this.state.drums}
          hitRecord={this.hitRecord}
          playSound={this.playSound}
        />
        <h4># of players: {this.state.userCount}</h4>
        {/* <img id="mario" src ="/images/mario-running.gif"/> */}
      </div>
    );
  }
}

export default App;
