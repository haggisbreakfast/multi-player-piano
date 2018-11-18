import React from 'react';
import { KeysContainer } from './KeysContainer.jsx';

export class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recording: false,
      drums: false,
    };
  }
  render() {
    return (
      <KeysContainer socket={this.props.socket} notes={this.props.notes} />
    );
  }
}

// export default Keyboard;
