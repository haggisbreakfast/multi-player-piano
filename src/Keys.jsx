import React from 'react';
// indiv key component
class Key extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // create a ref for key focus
  //   // this.blah = React.createRef();
  // }
  componentWillMount() {
    document.addEventListener('keydown', this.onKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyPress);
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
    if (event.key === this.props.note.key) {
      // this.blah.current.focus();
      console.log('this.ref', this.refs.key);
      this.refs.key.focus();
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
        ref="key"
        className={`eightbit-btn ${
          this.props.note.sharp ? 'black-key' : 'white-key'
        }`}
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
