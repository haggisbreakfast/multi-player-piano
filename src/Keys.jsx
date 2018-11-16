import React from 'react';

class Keys extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b'],
      recordedPattern: [],
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
          <div className="white-key" id="C" />
        </div>
      </div>
    );
  }
}

export default Keys;
