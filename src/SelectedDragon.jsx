import React, { Component } from 'react';

class SelectedDragon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wobble: null
    };
  }

  onClick = e => {
    e.preventDefault();
    console.log('wobble clicked');
    this.setState({ wobble: ' wobble' });
    setTimeout(() => {
      console.log('timeout hit');
      this.setState({ wobble: null });
    }, 1500);
  };

  render() {
    return (
      <div className="selectedDragonContainer">
        <img
          className={`eggSelected${this.state.wobble || ''}`}
          src={this.props.selectedDragon}
          onClick={this.onClick}
          name="dragon1"
          alt="dragon 1"
        />
      </div>
    );
  }
}

export default SelectedDragon;
