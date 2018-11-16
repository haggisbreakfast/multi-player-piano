import React, { Component } from 'react';
import './App.css';
import Keys from './Keys';
import './styles/piano.css'
import <link href="https://fonts.googleapis.com/css?family=Open+Sans|VT323" rel="stylesheet">

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
        <div>Key Board Container
      <div> Keys</div>
      <div class="piano">
        <div class="piano-key">
          <div class="white-key"> w </div>
          <div class="black-key"> b </div>
        </div>
        <div class="piano-key">
          <div class="white-key"> w </div>
          <div class="black-key"> b</div>
        </div>
        <div class="piano-key">
          <div class="white-key"> w </div>
          <div class="white-key"> w </div>
        </div>
        <div class="piano-key">
          <div class="black-key"> b </div>
          <div class="white-key"> w </div>
        </div>
        <div class="piano-key">
          <div class="white-key"> w </div>
          <div class="black-key"> b </div>
        </div>
        <div class="piano-key">
          <div class="white-key"> b </div>
          <div class="black-key"> w </div>
        </div>
      </div>
    </div>
  </div>
    );
  }
}

export default App;
