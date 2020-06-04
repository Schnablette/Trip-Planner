import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchParkInformation } from "../actions";

class LoadedPage extends Component {
  componentDidMount() {
    const { parkCode } = this.props.match.params;
    this.props.fetchParkInformation(parkCode);
    console.log('the park code is: ' + parkCode)
  }

  //call this function when the generate button is clicked
  updateNationalPark() {
    const parkCodes = ['shen', 'acad'];
    const parkCode = parkCodes[Math.floor(Math.random() * parkCodes.length)];
    this.props.fetchParkInformation(parkCode);

  }

  render() {
    if (!this.props.park) {
      return (
        <main>
          <h1>Loading...</h1>
        </main>
      )
    }
    return (
      <div>
      <nav>
        <p>Nat'l Parks Trip Planner</p>
        <button>Generate Next Trip</button>
      </nav>

        <main>

          <h2>Your next trip will be to...</h2>
          <h1>{this.props.park.fullName}</h1>
          <div id="description" className="module">
            <p>{this.props.park.description}</p>
          </div>
          <div id="cost" className="module">
            <h3>{this.props.park.entranceFees[0].title}</h3>
            <p>${this.props.park.entranceFees[0].cost}</p>
          </div>
          <div id="address" className="module">
            <h3>Address</h3>
            <p>Stuff goes here</p>
          </div>
          <div id="weather" className="module">
            <h3>Weather Info</h3>
            <p>{this.props.park.weatherInfo}</p>
          </div>
          <div id="hours" className="module">
            <h3>Hours</h3>
            <ul>
              <li>Sunday: {this.props.park.operatingHours[0].standardHours.sunday}</li>
              <li>Monday: {this.props.park.operatingHours[0].standardHours.monday}</li>
              <li>Tuesday: {this.props.park.operatingHours[0].standardHours.tuesday}</li>
              <li>Wednesday: {this.props.park.operatingHours[0].standardHours.wednesday}</li>
              <li>Thursday: {this.props.park.operatingHours[0].standardHours.thursday}</li>
              <li>Friday: {this.props.park.operatingHours[0].standardHours.friday}</li>
              <li>Saturday: {this.props.park.operatingHours[0].standardHours.saturday}</li>
            </ul>
          </div>
          <div id="events">
            <h2>Upcoming Events</h2>
            <ul>
              <li>Event Item</li>
            </ul>
          </div>
        </main>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return { park: state.park };
}

function mapDispatchToProp(dispatch) {
  return bindActionCreators({fetchParkInformation}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProp)(LoadedPage)
