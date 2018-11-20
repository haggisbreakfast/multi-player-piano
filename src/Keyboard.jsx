import React from 'react';
import { KeysContainer } from './KeysContainer.jsx';

export class Keyboard extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     recording: false,
  //   };
  // }
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
  render() {
    return (
      <div>
        <div className= 'eightbit-btn Keyboard'>
        <button
          className="eightbit-btn DrumButton"
          onClick={this.keyClick}
          style={{ fontSize: '50%'}}>
          DRUMS
        </button>
        <button
          className="eightbit-btn Record"
          onClick={this.keyClick}
          style={{ fontSize: '50%'}}>
          Record
        </button>
        <KeysContainer socket={this.props.socket} notes={this.props.notes} />
      </div>
      </div>
    );
  }
}

// export default Keyboard;
