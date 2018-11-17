import React from 'react';
// indiv key component
class Key extends React.Component {
  constructor(props) {
    super(props);
    // creates method to call each note sound
    this.sound = new Audio(`/music/high-${props.note.name}.mp3`);
  }
  // handle note click
  keyClick = (event) => {
    event.preventDefault();
    // play sound
    this.sound.play();
    this.props.socket.send(this.props.note.name);
    this.props.socket.send(this.sound.src);
  };

  componentDidMount() {
    // when connection with websockets is open..
    this.props.socket.onopen = () => {
      console.log('Connected 2 keys');
    };
    // receiving data from websocket server
    // this.socket.onmessage = (event) => {
    //   let parsedData = JSON.parse(event.data);
    //   this.setState({
    //     userCount: parsedData.count,
    //   });
    // };
  }

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

class Keys extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recordednotes: [],

      notes: [
        {
          name: 'c',
          sharp: false,
        },
        {
          name: 'cs',
          sharp: true,
        },
        {
          name: 'd',
          sharp: false,
        },
        {
          name: 'ds',
          sharp: true,
        },
        {
          name: 'e',
          sharp: false,
        },
        {
          name: 'f',
          sharp: false,
        },
        {
          name: 'fs',
          sharp: true,
        },
        {
          name: 'g',
          sharp: false,
        },
        {
          name: 'gs',
          sharp: true,
        },
        {
          name: 'a',
          sharp: false,
        },
        {
          name: 'as',
          sharp: true,
        },
        {
          name: 'b',
          sharp: false,
        },
      ],
    };
  }

  render() {
    return (
      <div className="Keys">
        {/* iterate through notes */}
        {this.state.notes.map((note, index) => {
          return <Key note={note} key={index} socket={this.props.socket} />;
        })}
      </div>
    );
  }
}

export default Keys;
