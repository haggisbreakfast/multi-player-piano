import React from 'react';
// indiv key component
class Key extends React.Component {
  componentWillMount() {
    document.addEventListener('keydown', this.onKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyPress);
  }

  // onKeyPress = (event) => {
  //   console.log(event.key);
  //   // if (event.key === this.props.notes.key) {
  //   //   console.log(`keyboard ${event.key}`);
  // };
  // handle note clicka
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

  // handleKeyPress = (event) => {
  //     event.preventDefault();
  //     // play sound
  //     // this.sound.play();
  //     this.props.socket.send(
  //       JSON.stringify({
  //         note: this.props.note.name,
  //         type: 'note',
  //       }),
  //     );
  //   }
  // };
  onKeyPress = (event) => {
    if (event.key === this.props.note.key) {
      console.log(`keyboard ${event.key}`);
      this.props.socket.send(
        JSON.stringify({
          note: this.props.note.name,
          type: 'note',
          // filename: this.filename,
        }),
      );
    }
  };

  render() {
    return (
      <div
        // call click handler
        onClick={this.keyClick}
        // onKeyDown={this.onKeyPressed}
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
              notes={this.props.notes}
            />
          );
        })}
      </div>
    );
  }
}

// export default Keys;
