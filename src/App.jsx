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
          isPressed: false,
        },
        {
          name: 'low-cs',
          sharp: true,
          key: '2',
          tone: 'C_sharp_4',
          isPressed: false,
        },
        {
          name: 'low-d',
          sharp: false,
          key: 'w',
          tone: 'D4',
          isPressed: false,
        },
        {
          name: 'low-ds',
          sharp: true,
          key: '3',
          tone: 'D_sharp_4',
          isPressed: false,
        },
        {
          name: 'low-e',
          sharp: false,
          key: 'e',
          tone: 'E4',
          isPressed: false,
        },
        {
          name: 'low-f',
          sharp: false,
          key: 'r',
          tone: 'F4',
          isPressed: false,
        },
        {
          name: 'low-fs',
          sharp: true,
          key: '5',
          tone: 'F_sharp_4',
          isPressed: false,
        },
        {
          name: 'low-g',
          sharp: false,
          key: 't',
          tone: 'G4',
          isPressed: false,
        },
        {
          name: 'low-gs',
          sharp: true,
          key: '6',
          tone: 'G_sharp_4',
          isPressed: false,
        },
        {
          name: 'low-a',
          sharp: false,
          key: 'y',
          tone: 'A4',
          isPressed: false,
        },
        {
          name: 'low-as',
          sharp: true,
          key: '7',
          tone: 'A_sharp_4',
          isPressed: false,
        },
        {
          name: 'low-b',
          sharp: false,
          key: 'u',
          tone: 'B4',
          isPressed: false,
        },
        {
          name: 'high-c',
          sharp: false,
          key: 'z',
          tone: 'C5',
          isPressed: false,
        },
        {
          name: 'high-cs',
          sharp: true,
          key: 's',
          tone: 'C_sharp_5',
          isPressed: false,
        },
        {
          name: 'high-d',
          sharp: false,
          key: 'x',
          tone: 'D5',
          isPressed: false,
        },
        {
          name: 'high-ds',
          sharp: true,
          key: 'd',
          tone: 'D_sharp_5',
          isPressed: false,
        },
        {
          name: 'high-e',
          sharp: false,
          key: 'c',
          tone: 'E5',
          isPressed: false,
        },
        {
          name: 'high-f',
          sharp: false,
          key: 'v',
          tone: 'F5',
          isPressed: false,
        },
        {
          name: 'high-fs',
          sharp: true,
          key: 'g',
          tone: 'F_sharp_5',
          isPressed: false,
        },
        {
          name: 'high-g',
          sharp: false,
          key: 'b',
          tone: 'G5',
          isPressed: false,
        },
        {
          name: 'high-gs',
          sharp: true,
          key: 'h',
          tone: 'G_sharp_5',
          isPressed: false,
        },
        {
          name: 'high-a',
          sharp: false,
          key: 'n',
          tone: 'A5',
          isPressed: false,
        },
        {
          name: 'high-as',
          sharp: true,
          key: 'j',
          tone: 'A_sharp_5',
          isPressed: false,
        },
        {
          name: 'high-b',
          sharp: false,
          key: 'm',
          tone: 'B5',
          isPressed: false,
        },
      ],
      drums: {
        drum: false,
        // loop: true,
      },
      waveform: {
        wavetype: 'sine',
      },
      octave: 0,
    };

    // this.filename = `high-c.mp3`;
    // this.sound = new Audio(`/music/${this.filename}`);
    this.sounds = this.state.notes.reduce((prev, value) => {
      return {
        ...prev,
        // [value.name]: new Audio(`/music/${value.name}.mp3`),
        [value.name]: (waveform, octave) =>
          tones.play(
            value.tone || 'C4',
            waveform || this.state.waveform.wavetype,
            octave || this.state.octave,
          ),
      };
    }, {});

    this.drumSound = new Audio(`/music/drumloop.mp3`);

    // create a websocket connection to our server
    this.socket = new WebSocket(WEB_SOCKET_URL);
    // this.addMessage = this.addMessage.bind(this);
    console.log(WEB_SOCKET_URL);
  }
  changeKeyPress = (notename, isPressed) => {
    const newNotes = this.state.notes.map((note) => {
      if (note.name === notename) {
        return { ...note, isPressed };
      }
      return note;
    });
    this.setState({
      notes: newNotes,
    });
  };

  changeWaveform = (wave) => {
    this.setState({
      waveform: {
        wavetype: wave,
      },
    });
    console.log('changeWaveform func:', this.state.waveform.wavetype);
  };
  octaveSwitch = (pitch) => {
    if (pitch === 'up') {
      if (this.state.octave < 3) {
        this.setState({
          octave: this.state.octave + 1,
        });
      }
    } else if (pitch === 'down') {
      if (this.state.octave > -3) {
        this.setState({
          octave: this.state.octave - 1,
        });
      }
    }
  };

  playSound = (noteName, waveform, octave) => {
    // this.sounds[noteName].currentTime = 0;
    console.log(
      'playSound func:',
      waveform || this.state.waveform.wavetype,
      octave || this.state.octave,
    );
    return this.sounds[noteName](
      waveform || this.state.waveform.wavetype,
      octave || this.state.octave,
    );
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
          this.playSound(
            parsedData.note,
            parsedData.waveform,
            parsedData.octave,
          );
          this.changeKeyPress(parsedData.note, true);
          setTimeout(() => {
            this.changeKeyPress(parsedData.note, false);
          }, 200);

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
            this.drumSound.currentTime = 0;
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
  render() {
    return (
      <div className="App">
        <img id="logo" src="/images/logo.png" />
        <h3 className="slogan"> Make music with your friends from anywhere!</h3>
        <h4 className="players"># of players: {this.state.userCount}</h4>
        <Keyboard
          socket={this.socket}
          notes={this.state.notes}
          drums={this.state.drums}
          hitRecord={this.hitRecord}
          playSound={this.playSound}
          changeWaveform={this.changeWaveform}
          octaveSwitch={this.octaveSwitch}
          statewaveform={this.state.waveform.wavetype}
          octave={this.state.octave}
          changeKeyPress={this.changeKeyPress}
        />
      </div>
    );
  }
}

export default App;
