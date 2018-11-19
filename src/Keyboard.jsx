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
        <button
          className="DrumButton"
          onClick={this.keyClick}
          style={{ fontSize: '200%', backgroundColor: 'aqua' }}>
          DROMS
        </button>
        <KeysContainer socket={this.props.socket} notes={this.props.notes} />
      </div>
    );
  }
}

// export default Keyboard;
