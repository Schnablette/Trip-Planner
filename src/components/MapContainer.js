import React, { Component } from "react";
//import { connect } from "react-redux";
import { Map, GoogleApiWrapper } from 'google-maps-react';


export class MapContainer extends Component {
  
  render() {

    const mapStyles = {
      float: 'left',
      width: '50%',
      height: '50%',
    };

    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: this.props.park.latitude, lng: this.props.park.longitude }}
      />
    )
  }
}

// function mapStateToProps(state) {
//   return { park: state.park };
// }

export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer);

