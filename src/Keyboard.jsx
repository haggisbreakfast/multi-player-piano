import React from 'react';
import { KeysContainer } from './KeysContainer.jsx';

export class Keyboard extends React.Component {
  keyClick = (event) => {
    event.preventDefault();

    console.log('play thu drums');
    this.props.socket.send(
      JSON.stringify({
        // drums: this.props.drums,
        type: 'drums',
      }),
    );
  };
  recordButton = (event) => {
    event.preventDefault();
    console.log('record button pressed');
    this.props.socket.send(
      JSON.stringify({
        type: 'recording',
      }),
    );
  };
  render() {
    return (
      <div>
        <div className="eightbit-btn Keyboard" style={{ background: 'red' }}>
          <button className="eightbit-btn DrumButton" onClick={this.keyClick}>
            Drums
          </button>
          <button className="eightbit-btn Record" onClick={this.recordButton}>
            Record
          </button>
          <button className="eightbit-btn Record">Stop</button>
          <button className="eightbit-btn Record">Clear</button>
          <KeysContainer socket={this.props.socket} notes={this.props.notes} />
        </div>
      </div>
    );
  }
}

// export default Keyboard;
