import React from 'react';
import KeysContainer from './KeysContainer.jsx';

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recording: false,
      drums: false,
    };
  }
  render() {
    return <KeysContainer />;
  }
}

export default Keyboard;
