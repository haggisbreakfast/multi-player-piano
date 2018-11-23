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

  // toggle = () => {
  //   return <img id="mario" src="/images/drummer.gif" />;
  // };

  render() {
    return (
      <div>
        <div className="eightbit-btn Keyboard" style={{ background: 'red' }}>
          <button className="eightbit-btn DrumButton" onClick={this.keyClick}>
            Drums
          </button>
          <button className="eightbit-btn Triangle">
            Triangle
          </button>
          <button className="eightbit-btn Square">Square</button>
          <button className="eightbit-btn Sine">Sine</button>
          <button className="eightbit-btn Sawtooth">Sawtooth</button>
          <KeysContainer
            socket={this.props.socket}
            notes={this.props.notes}
            playSound={this.props.playSound}
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
