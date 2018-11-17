import React from 'react';
import Keys from './Keys.jsx';

class KeysContainer extends React.Component {
  render() {
    return <Keys socket={this.props.socket} />;
  }
}

export default KeysContainer;
