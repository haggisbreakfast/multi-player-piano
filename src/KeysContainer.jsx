import React from 'react';
import { Keys } from './Keys.jsx';

export class KeysContainer extends React.Component {
  render() {
    return (
      <Keys
        socket={this.props.socket}
        notes={this.props.notes}
        playSound={this.playSound}
      />
    );
  }
}

// export default KeysContainer;
