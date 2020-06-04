import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchParkInformation } from "../actions";

class LoadedPage extends Component {
  componentDidMount() {
    const { parkCode } = this.props.match.params;
    this.props.fetchParkInformation(parkCode);

  }

  render() {
    console.log(this.props.park)
    return (
      <main>
        <h2>your next trip will be to</h2>
        <h1>Acadia</h1>
        <h2>National Park</h2>
        <div id="description" className="module">
          <p>Here's where the description will go.</p>
        </div>
        <div id="cost" className="module">
          <p>Cost</p>
        </div>
        <div id="address" className="module">
          <p>Address</p>
        </div>
        <div id="weather" className="module">
          <p>Weather</p>
        </div>
        <div id="hours" className="module">
          <p>Hours</p>
        </div>
        <h2>Upcoming Events</h2>
        <ul>
          <li>Event Item</li>
        </ul>
      </main>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return { park: state.park };
}

function mapDispatchToProp(dispatch) {
  return bindActionCreators({fetchParkInformation}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProp)(LoadedPage)
