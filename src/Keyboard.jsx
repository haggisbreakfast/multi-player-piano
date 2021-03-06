import React from 'react';
import { KeysContainer } from './KeysContainer.jsx';

export class Keyboard extends React.Component {
  constructor() {
    super();
    this.state = {
      iconVisible: false,
    };
  }
  keyClick = (event) => {
    event.preventDefault();
    console.log('play thu drums');
    console.log('on drums', this.props);
    this.props.socket.send(
      JSON.stringify({
        // drums: this.props.drums,
        type: 'drums',
      }),
    );
    this.setState({
      iconVisible: true,
    });
  };


  render() {
    return (
      <div>
        <div className="eightbit Keyboard" style={{ background: '#ff2400' }}>
        {/* <span className="eightbit OctaveButton">
            {this.props.octave}
          </span> */}
          <button
            className="eightbit OctaveButton"
            onClick={() => this.props.octaveSwitch('up')}>
            <img class="key-button" src="/images/octave-up.png" />
          </button>
          <button
            className="eightbit OctaveButton"
            onClick={() => this.props.octaveSwitch('down')}>
            <img class="key-button" src="/images/octave-down.png" />
          </button>
          <button className="eightbit DrumButton" onClick={this.keyClick}>
          <img class="key-button" src="/images/drums.png" />
          </button>
          <button
            className="eightbit Triangle"
            onClick={() => this.props.changeWaveform('triangle')}>
            <img class="key-button" src="/images/triangle.png" />
          </button>
          <button
            className="eightbit Square"
            onClick={() => this.props.changeWaveform('square')}>
            <img class="key-button" src="/images/square.png" />
          </button>
          <button
            className="eightbit Sine"
            onClick={() => this.props.changeWaveform('sine')}>
            <img class="key-button" src="/images/sine.png" />
          </button>
          <button
            className="eightbit Sawtooth"
            onClick={() => this.props.changeWaveform('sawtooth')}>
            <img class="key-button" src="/images/sawtooth.png" />
          </button>
          <KeysContainer
            socket={this.props.socket}
            notes={this.props.notes}
            playSound={this.props.playSound}
            statewaveform={this.props.statewaveform}
            octave={this.props.octave}
            changeKeyPress={this.props.changeKeyPress}
          />
        </div>
      </div>
    );
  }
}

// export default Keyboard;

// var c = new Audio('http://localhost:8000/high-c.mp3');
// var recording = [
//   { offset: 1, note: 'C' },
//   { offset: 1.2, note: 'C' },
//   { offset: 1.5, note: 'C' },
//   { offset: 1.6, note: 'C' },
//   { offset: 1.7, note: 'C' },
//   { offset: 1.75, note: 'C' },
//   { offset: 3, note: 'C' },
// ];

// function playNote(i) {
//   c.play();

//   setTimeout(() => {
//     playNote(i++);
//   }, 1000);
// }

// playNote(0);
