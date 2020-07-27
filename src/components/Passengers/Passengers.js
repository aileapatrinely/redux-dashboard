import React, { Component } from 'react';
import { connect } from 'react-redux';
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class Passengers extends Component {
  state = [];

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      name: event.target.value,
    });
  };

  addPassenger = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'ADD_PERSON',
      payload: this.state,
    });
  };

  render() {
    return (
      <div>
        <h2>Passengers</h2>

        <input
          onChange={this.handleChange}
          type="text"
          name="name"
          placeholder="Enter Name"
        />
        <button onClick={this.addPassenger}>Add Passenger</button>

        <ul>
          PASSENGER LIST:
          {this.props.store.peopleReducer.name}
        </ul>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Passengers);
