import React, { Component } from 'react';
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SpeedControl extends Component {
  render() {
    return (
      <div>
        <h2>Speed Control</h2>

        <button>Increase Speed</button>
        <p>SPEED: GOES HERE</p>
        <button>Decrease Speed</button>
      </div>
    )
  }
}

export default SpeedControl;