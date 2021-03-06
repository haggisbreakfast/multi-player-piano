import React from 'react';
// import { DH_UNABLE_TO_CHECK_GENERATOR } from 'constants';
// indiv key component
class Key extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keypressed: false,
    };
  }
  componentWillMount() {
    document.addEventListener('keydown', this.onKeyPress);
    document.addEventListener('keyup', this.onKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyPress);
    document.removeEventListener('keyup', this.onKeyUp);
  }

  // handle note clicks
  keyClick = (event) => {
    // event.preventDefault();
    this.props.playSound(this.props.note.name);
    console.log('onkeyclick:', this.props.statewaveform);
    this.props.socket.send(
      JSON.stringify({
        waveform: this.props.statewaveform,
        note: this.props.note.name,
        type: 'note',
        octave: this.props.octave,

        // filename: this.filename,
      }),
    );
  };

  onKeyPress = (event) => {
    console.log(event.key);
    // console.log('sdfsdfsdfsdf');
    if (event.key === this.props.note.key && !this.state.keypressed) {
      this.props.playSound(this.props.note.name);

      // console.log('refs', this.refs[this.props.note.key]);
      // this.refs[this.props.note.key].click();
      this.props.changeKeyPress(this.props.note.name, true);

      // let that = this;

      this.props.socket.send(
        JSON.stringify({
          waveform: this.props.statewaveform,
          note: this.props.note.name,
          type: 'note',
          octave: this.props.octave,
        }),
      );
      // if (this.state.keypressed === true) {
      // call click handler
      // }
    }
  };

  onKeyUp = (event) => {
    this.props.changeKeyPress(this.props.note.name, false);
  };

  render() {
    let className = `eightbit ${
      this.props.note.sharp ? 'black-key' : 'white-key'
    } ${this.props.note.isPressed ? 'active' : 'eightbit'}`;
    return (
      <div
        // call click handler
        // onTouchStart={this.keyClick}
        onMouseDown={this.keyClick}
        onKeyDown={this.onKeyPress}
        onKeyUp={this.onKeyUp}
        className={className}
        id={this.props.note.name}
        ref={this.props.note.key}
        tonessynth={this.props.tonessynth}>
        {/* console.log(this.props.socket) */}
      </div>
    );
  }
}

export class Keys extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recordednotes: [],
    };
  }

  render() {
    return (
      <div className="Keys">
        {/* iterate through notes */}
        {this.props.notes.map((note, index) => {
          return (
            <Key
              note={note}
              key={index}
              socket={this.props.socket}
              notes={this.props.notes}
              playSound={this.props.playSound}
              statewaveform={this.props.statewaveform}
              octave={this.props.octave}
              changeKeyPress={this.props.changeKeyPress}
            />
          );
        })}
      </div>
    );
  }
}

// export default Keys;
