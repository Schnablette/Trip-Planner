import React, { Component } from "react";
//import { connect } from "react-redux";
import { Map, GoogleApiWrapper } from 'google-maps-react';


export class MapContainer extends Component {
  
  render() {
    console.log(`rendering map container`)
    console.log(this.props.latitude, this.props.longitude)
    const mapStyles = {
      width: '50%',
      height: '50%',
    };

    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: this.props.latitude, lng: this.props.longitude }}
        center={{ lat: this.props.latitude, lng: this.props.longitude }}
      />
    )
  }
}

// function mapStateToProps(state) {
//   return { park: state.park };
// }

export default GoogleApiWrapper({
  apiKey: 'AIzaSyASqfYqXSpj9Hmn3hrPiu8RwOXxxmOhyLE'
})(MapContainer);

