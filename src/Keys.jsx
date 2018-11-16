import React from 'react';

class Key extends React.Component {
  constructor(props) {
    super(props);

    this.sound = new Audio(`/${props.note.name}.mp3`);
  }

  keyClick = (event) => {
    event.preventDefault();
    this.sound.play();
    console.log(event.target.id);
  };
  render() {
    return (
      <div
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

      notes2: [
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
        <div className="piano-key">
          {this.state.notes2.map((note, index) => {
            return <Key note={note} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default Keys;
