import React from 'react';
// import { DH_UNABLE_TO_CHECK_GENERATOR } from 'constants';
// indiv key component
class Key extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keypressed: false,
    };
  }
  componentWillMount() {
    document.addEventListener('keydown', this.onKeyPress);
    document.addEventListener('keyup', this.onKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyPress);
    document.removeEventListener('keyup', this.onKeyUp);
  }

  // handle note clicks
  keyClick = (event) => {
    // event.preventDefault();
    this.props.playSound(this.props.note.name);
    this.props.socket.send(
      JSON.stringify({
        note: this.props.note.name,
        type: 'note',
        // filename: this.filename,
      }),
    );
  };

  onKeyPress = (event) => {
    console.log(event.key);
    // console.log('sdfsdfsdfsdf');
    if (event.key === this.props.note.key && !this.state.keypressed) {
      this.props.playSound(this.props.note.name);

      // console.log('refs', this.refs[this.props.note.key]);
      // this.refs[this.props.note.key].click();
      this.setState({
        keypressed: true,
      });

      // let that = this;

      this.props.socket.send(
        JSON.stringify({
          note: this.props.note.name,
          type: 'note',
        }),
      );
      // if (this.state.keypressed === true) {
      // call click handler
      // }
    }
  };

  onKeyUp = (event) => {
    this.setState({
      keypressed: false,
    });
  };

  render() {
    let className = `eightbit ${
      this.props.note.sharp ? 'black-key' : 'white-key'
    } ${this.state.keypressed ? 'active' : 'eightbit'}`;
    return (
      <div
        // call click handler
        // onMouseDown={this.keyClick}
        // onTouchStart={this.keyClick}
        onMouseDown={this.keyClick}
        onKeyDown={this.onKeyPress}
        onKeyUp={this.onKeyUp}
        className={className}
        id={this.props.note.name}
        ref={this.props.note.key}>
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
          return (
            <Key
              note={note}
              key={index}
              socket={this.props.socket}
              notes={this.props.notes}
              playSound={this.props.playSound}
            />
          );
        })}
      </div>
    );
  }
}

// export default Keys;
