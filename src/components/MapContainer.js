import React, { Component } from "react";
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
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      />
    )
  }
}

function mapStateToProps(state) {
  return { park: state.park, campsite: state.campsite, events: state.events };
}

export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer);