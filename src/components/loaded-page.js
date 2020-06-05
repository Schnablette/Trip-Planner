import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchParkInformation, fetchCampSiteInformation, fetchEVENTInformation } from "../actions";

class LoadedPage extends Component {
  componentDidMount() {
    const { parkCode } = this.props.match.params;
    this.props.fetchParkInformation(parkCode);
    this.props.fetchCampSiteInformation(parkCode);
    this.props.fetchCampSiteInformation(parkCode);
    this.props.fetchEVENTInformation(parkCode,() => console.log(this.props.events));
  }

  //call this function when the generate button is clicked
  // updateNationalPark() {
  //   const parkCodes = ['shen', 'acad'];
  //   const parkCode = parkCodes[Math.floor(Math.random() * parkCodes.length)];
  //   this.props.fetchParkInformation(parkCode);
  //
  // }

  render() {
    if (!this.props.park || !this.props.campsite || !this.props.events) {
      return (
        <main>
          <h1>Loading...</h1>
        </main>
      )
    }
    return (
      <div>
      <nav>
        <p>Escape from 2020</p>
        <button>Generate Your Escape</button>
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
            <h3>Campsite</h3>
            <h3>{this.props.campsite.name}</h3>
            <p>{this.props.campsite.contacts.phoneNumbers[0].phoneNumber}</p>
            <p>{this.props.campsite.contacts.emailAddresses[0].emailAddress}</p>
            <p>{this.props.campsite.fees[0].description}</p>
            <p>{this.props.campsite.reservationUrl}</p>
            <image src={this.props.campsite.images[0].url} />
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
  return { park: state.park, campsite: state.campsite, events: state.events };
}

function mapDispatchToProp(dispatch) {
  return bindActionCreators({fetchParkInformation, fetchCampSiteInformation, fetchEVENTInformation}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProp)(LoadedPage)
