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
        },
        {
          name: 'cs',
          sharp: true,
        },
        {
          name: 'd',
        },
        {
          name: 'ds',
          sharp: true,
        },
        {
          name: 'e',
        },
        {
          name: 'f',
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
