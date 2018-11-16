import React from 'react';

class Key extends React.Component {
  keyClick = (event) => {
    event.preventDefault();
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
          name: 'C',
        },
        {
          name: 'C#',
          sharp: true,
        },
        {
          name: 'D',
        },
        {
          name: 'D#',
          sharp: true,
        },
        {
          name: 'E',
        },
        {
          name: 'F',
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
