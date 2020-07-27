import React, { Component } from 'react';
import { connect } from 'react-redux';
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SpeedControl extends Component {
  clickIncrease = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'INCREASE_SPEED',
    });
  };

  clickDecrease = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'DECREASE_SPEED',
    });
  };
  click;
  render() {
    return (
      <div>
        <h2>Speed Control</h2>

        <button onClick={this.clickIncrease}>Increase Speed</button>
        <p>SPEED: {this.props.store.speedReducer}</p>
        <button onClick={this.clickDecrease}>Decrease Speed</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(SpeedControl);
