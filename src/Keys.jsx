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
    // console.log(event.target.id);
  };
  render() {
    return (
      <div
        // call click handler
        onClick={this.keyClick}
        className={this.props.note.sharp ? 'black-key' : 'white-key'}
        id={this.props.note.name}>
        {this.props.note.name}
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
          return <Key note={note} key={index} />;
        })}
      </div>
    );
  }
}

export default Keys;
