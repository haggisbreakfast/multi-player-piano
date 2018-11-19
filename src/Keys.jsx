import React from 'react';
// indiv key component
class Key extends React.Component {
  // handle note click
  keyClick = (event) => {
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

  handleKeyPress = (event) => {
    if (event.key === this.props.notes.key) {
      document.addEventListener('keydown', this.keyClick);
      this.keyClick();
    }
  };

  render() {
    return (
      <div
        // call click handler
        onClick={this.keyClick}
        onKeyDown={this.onKeyPressed}
        tabIndex="0"
        className={this.props.note.sharp ? 'black-key' : 'white-key'}
        id={this.props.note.name}>
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
              keypress={this.props.notes.key}
            />
          );
        })}
      </div>
    );
  }
}

// export default Keys;
