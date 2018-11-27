import React, { Component } from 'react';
import './App.scss';
import { Keyboard } from './Keyboard.jsx';
import Tones from './Tones.js';

const tones = new Tones();
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
          tone: 'C4',
        },
        {
          name: 'low-cs',
          sharp: true,
          key: '2',
          tone: 'C_sharp_4',
        },
        {
          name: 'low-d',
          sharp: false,
          key: 'w',
          tone: 'D4',
        },
        {
          name: 'low-ds',
          sharp: true,
          key: '3',
          tone: 'D_sharp_4',
        },
        {
          name: 'low-e',
          sharp: false,
          key: 'e',
          tone: 'E4',
        },
        {
          name: 'low-f',
          sharp: false,
          key: 'r',
          tone: 'F4',
        },
        {
          name: 'low-fs',
          sharp: true,
          key: '5',
          tone: 'F_sharp_4',
        },
        {
          name: 'low-g',
          sharp: false,
          key: 't',
          tone: 'G4',
        },
        {
          name: 'low-gs',
          sharp: true,
          key: '6',
          tone: 'G_sharp_4',
        },
        {
          name: 'low-a',
          sharp: false,
          key: 'y',
          tone: 'A4',
        },
        {
          name: 'low-as',
          sharp: true,
          key: '7',
          tone: 'A_sharp_4',
        },
        {
          name: 'low-b',
          sharp: false,
          key: 'u',
          tone: 'B4',
        },
        {
          name: 'high-c',
          sharp: false,
          key: 'z',
          tone: 'C5',
        },
        {
          name: 'high-cs',
          sharp: true,
          key: 's',
          tone: 'C_sharp_5',
        },
        {
          name: 'high-d',
          sharp: false,
          key: 'x',
          tone: 'D5',
        },
        {
          name: 'high-ds',
          sharp: true,
          key: 'd',
          tone: 'D_sharp_5',
        },
        {
          name: 'high-e',
          sharp: false,
          key: 'c',
          tone: 'E5',
        },
        {
          name: 'high-f',
          sharp: false,
          key: 'v',
          tone: 'F5',
        },
        {
          name: 'high-fs',
          sharp: true,
          key: 'g',
          tone: 'F_sharp_5',
        },
        {
          name: 'high-g',
          sharp: false,
          key: 'b',
          tone: 'G5',
        },
        {
          name: 'high-gs',
          sharp: true,
          key: 'h',
          tone: 'G_sharp_5',
        },
        {
          name: 'high-a',
          sharp: false,
          key: 'n',
          tone: 'A5',
        },
        {
          name: 'high-as',
          sharp: true,
          key: 'j',
          tone: 'A_sharp_5',
        },
        {
          name: 'high-b',
          sharp: false,
          key: 'm',
          tone: 'B5',
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
        // [value.name]: new Audio(`/music/${value.name}.mp3`),
        [value.name]: () => tones.play(value.tone || 'C4'),
      };
    }, {});

    this.drumSound = new Audio(`/music/drumloop.mp3`);

    // create a websocket connection to our server
    this.socket = new WebSocket(WEB_SOCKET_URL);
    // this.addMessage = this.addMessage.bind(this);
    console.log(WEB_SOCKET_URL);
  }
  changeWaveform = (wave) => {
    tones.synth = wave;
  };
  octaveSwitch = (pitch) => {
      if (pitch === "up") {
        tones.octaveUp()
      } else if (pitch === "down") {
        tones.octaveDown()
      }
  
  };

  playSound = (noteName) => {
    // this.sounds[noteName].currentTime = 0;

    return this.sounds[noteName]();
    // if (this.sounds[noteName]) {
    //   this.sounds[noteName].currentTime = 0;
    //   this.sounds[noteName].volume = 1;
    //   this.sounds[noteName].play();
    // }
  };
  // octaveUp = () =>

  // downboop() {
  //   const actx = new AudioContext();
  //   const now = actx.currentTime;
  //   const osc = actx.createOscillator();
  //   const gain = actx.createGain();

  //   osc.type = 'sine';
  //   osc.connect(gain);
  //   gain.connect(actx.destination);
  //   gain.gain.setValueAtTime(0.4, now);
  //   osc.frequency.setValueAtTime(1174.66, now);
  //   osc.frequency.exponentialRampToValueAtTime(698.46, now + 0.2);
  //   gain.gain.linearRampToValueAtTime(0.0001, now + 0.2);
  //   osc.start(now);
  //   osc.stop(now + 0.2);
  // }

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
          // setImmediate(() => {});
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

  // hitRecord = () => {
  //   this.socket.send(JSON.stringify({ type: 'record' }));
  // };
    render(){
    return (
      <div className="App">
        {/* <img id="logo" src="/images/logo.png" /> */}
        <h3> Make music with your friends from anywhere!</h3>
        <Keyboard
          socket={this.socket}
          notes={this.state.notes}
          drums={this.state.drums}
          hitRecord={this.hitRecord}
          playSound={this.playSound}
          changeWaveform={this.changeWaveform}
          octaveSwitch={this.octaveSwitch}
        />
        <h4># of players: {this.state.userCount}</h4>
      </div>
      
    );
  }
}

export default App;
