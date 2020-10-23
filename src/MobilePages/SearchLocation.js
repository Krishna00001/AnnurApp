import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
//import Map from "./Map"
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;


export class SearchLocation extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  RedirectHandler = () => {
    this.props.history.push({
      pathname: "./menu-page",
    });
  };
  render() {
    return (
      <div className="aa-searach-location-container">
        <div className="aa-search-location-top-container">
            <h1>Discover your place</h1>
        </div>
        <div className="aa-search-location-map-container" style={{borderRadius:'25px'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDO0b3A-6FqTKbzErG17XTJGTTv1fRkJic' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
        </div>
        <button className="aa-search-location-submit-button" onClick={this.RedirectHandler}>Proceed</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(SearchLocation);
