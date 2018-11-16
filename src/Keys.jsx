import React from 'react';

class Keys extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: {
        C: 'c',
        Csharp: 'c#',
        D: 'd',
        Dsharp: 'd#',
        E: 'e',
        F: 'f',
        Fsharp: 'f#',
        G: 'g',
        Gsharp: 'g#',
        A: 'a',
        Asharp: 'a#',
        B: 'b',
      },
      recordedNotes: [],
    };
  }
  keyClick = (event) => {
    event.preventDefault();
    console.log(event.target.id);
  };
  render() {
    return (
      <div className="Keys">
        <div className="piano-key" onClick={this.keyClick}>
          <div className="white-key" id={this.state.notes.C} />
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
          <div className="white-key" id={this.state.notes.B} />
        </div>
      </div>
    );
  }
}

export default Keys;
