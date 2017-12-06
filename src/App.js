import React, { Component } from 'react';
import SelectedDragon from './SelectedDragon';
// import logo from './logo.svg';
import dragon1 from './water-dragon.png';
import dragon2 from './fire-dragon.png';
import dragon3 from './nature-dragon.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDragon: null
    };
  }

  selectDragon = e => {
    let selectedDragon;
    console.log(e.target.name === 'dragon1');
    switch (e.target.name) {
      case 'dragon1': {
        selectedDragon = dragon1;
        break;
      }
      case 'dragon2': {
        selectedDragon = dragon2;
        break;
      }
      case 'dragon3': {
        selectedDragon = dragon3;
        break;
      }
      default: {
        selectedDragon = dragon2;
      }
    }

    console.log(selectedDragon);
    this.setState({ selectedDragon });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <svg viewBox="0 0 600 300">
            <pattern
              id="p-fire"
              viewBox="30 100 186 200"
              patternUnits="userSpaceOnUse"
              width="216"
              height="200"
              x="-19"
              y="53"
            >
              <image
                href="http://tympanus.net/codrops-playground/assets/images/posts/23145/fire.gif"
                width="256"
                height="308"
              />
            </pattern>
            <text
              textAnchor="middle"
              x="50%"
              y="60%"
              dy=".001em"
              className="text"
            >
              Welcome to Dragonwars
            </text>
          </svg>
        </header>
        <div>
          <h2>Pick your dragon</h2>
          <SelectedDragon selectedDragon={this.state.selectedDragon} />
          <div className="dragon-options">
            <div className="eggOptionContainer">
              <img
                className="eggOption"
                src={dragon1}
                name="dragon1"
                alt="dragon 1"
                onMouseOver={this.selectDragon}
              />
            </div>
            <div className="eggOptionContainer">
              <img
                className="eggOption"
                src={dragon2}
                name="dragon2"
                alt="dragon 1"
                onMouseOver={this.selectDragon}
              />
            </div>
            <div className="eggOptionContainer">
              <img
                className="eggOption"
                src={dragon3}
                name="dragon3"
                alt="dragon 1"
                onMouseOver={this.selectDragon}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
