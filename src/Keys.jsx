import React from 'react';
import { DH_UNABLE_TO_CHECK_GENERATOR } from 'constants';
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
    console.log('key clicked');
    event.preventDefault();
    // play sound
    // this.sound.play();
    this.props.socket.send(
      JSON.stringify({
        note: this.props.note.name,
        type: 'note',
        // filename: this.filename,
      }),
    );
  };

  onKeyPress = (event) => {
    // console.log('sdfsdfsdfsdf');
    if (event.key === this.props.note.key && !this.state.keypressed) {
      // console.log('refs', this.refs[this.props.note.key]);
      this.refs[this.props.note.key].click();
      this.setState({
        keypressed: true,
      });

      let that = this;

      this.props.socket.send(
        JSON.stringify({
          note: this.props.note.name,
          type: 'note',
        }),
      );
      if (this.state.keypressed === true) {
        // call click handler
      }
    }
  };

  onKeyUp = (event) => {
    this.setState({
      keypressed: false,
    });
  };

  render() {
    let className = `eightbit-btn ${
      this.props.note.sharp ? 'black-key' : 'white-key'
    } ${this.state.keypressed ? 'active' : 'eightbit-btn'}`;
    return (
      <div
        // call click handler
        onMouseDown={this.keyClick}
        onKeyDown={this.onKeyPress}
        onKeyUp={this.onKeyUp}
        className={className}
        id={this.props.note.name}
        ref={this.props.note.key}>
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
            />
          );
        })}
      </div>
    );
  }
}

// export default Keys;
