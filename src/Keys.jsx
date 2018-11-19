import React from 'react';
// indiv key component
class Key extends React.Component {
  // constructor(props) {
  //   super(props);
  // creates method to call each note sound
  // this.filename = `high-${props.note.name}.mp3`;
  // this.sound = new Audio(`/music/${this.filename}`);
  // }
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

  // componentDidMount() {
  //   // when connection with websockets is open..
  //   this.props.socket.onopen = () => {
  //     console.log('Connected 2 keys');
  //   };
  //   // receiving data from websocket server

  // //   this.props.socket.onmessage = (event) => {
  // //     console.log(JSON.parse(event.data));
  // //   };
  // }

  render() {
    return (
      <div
        // call click handler
        onClick={this.keyClick}
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
          return <Key note={note} key={index} socket={this.props.socket} />;
        })}
      </div>
    );
  }
}

// export default Keys;
