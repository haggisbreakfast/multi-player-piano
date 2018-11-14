import React, { Component } from 'react';
import './App.css';
import Keys from './Keys';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      string: 'sup',
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />
      </div>
    );
  }
}

export default App;
