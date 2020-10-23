import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class BusStation extends Component {
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
    
    render() {
        return (
            <div className="aa-bus-station-page-container">
                <div className="aa-bus-station-map-container">
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
                <div className="aa-bus-station-timings-container">
                    <div className="aa-bus-station-timings-headings-container">
                        <h2>Bus Timings</h2>
                    </div>
                    <div className="aa-bus-station-timings-details-container">
                        <p>Towards Coimbatore</p>
                        <p>8:15</p>
                        <p>8:15</p>
                        <p>8:15</p>
                        <p>8:15</p>
                        <p>8:15</p>
                        <p>Towards Sathyamangalam</p>
                        <p>8:15</p>
                        <p>8:15</p>
                        <p>8:15</p>
                        <p>8:15</p>
                        <p>8:15</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(BusStation)
