import React from 'react';

class Key extends React.Component {
  keyClick = (event) => {
    event.preventDefault();
    console.log(event.target.id);
  };
  render() {
    return (
      <div onClick={this.keyClick} className="white-key" id={this.props.note.name}>
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
        },
        {
          name: 'D',
        },
        {
          name: 'D#',
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
          {/* <div className="white-key" id={this.state.notes.C} />
          <div className="black-key" id={this.state.notes.Csharp} />
          <div className="white-key" id={this.state.notes.D} />
          <div className="black-key" id={this.state.notes.Dsharp} />
          <div className="white-key" id={this.state.notes.E} />
          <div className="white-key" id={this.state.notes.F} />
          <div className="black-key" id={this.state.notes.Fsharp} />
          <div className="white-key" id={this.state.notes.G} />
          <div className="black-key" id={this.state.notes.Gsharp} />
          <div className="white-key" id={this.state.notes.A} />
          <div className="black-key" id={this.state.notes.Asharp} />
          <div className="white-key" id={this.state.notes.B} /> */}
        </div>
      </div>
    );
  }
}

export default Keys;
