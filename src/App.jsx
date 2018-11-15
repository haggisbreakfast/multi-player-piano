import React, { Component } from 'react';
import './App.css';
import Keys from './Keys';
import './styles/piano.css'

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
