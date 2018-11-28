import React from 'react';
import { Keys } from './Keys.jsx';

export class KeysContainer extends React.Component {
  render() {
    return (
      <Keys
        socket={this.props.socket}
        notes={this.props.notes}
        playSound={this.props.playSound}
        statewaveform={this.props.statewaveform}
        octave={this.props.octave}
        changeKeyPress={this.props.changeKeyPress}
      />
    );
  }
}

// export default KeysContainer;
