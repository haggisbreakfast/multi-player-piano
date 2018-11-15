import React from 'react';

class Keys extends React.Component {
  keyClick = (event) => {
    event.preventDefault();
    console.log('note played');
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
