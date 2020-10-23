import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { compose } from "redux";

export class BusPage extends Component {
    BusStationRedirectHandler = () => {
        this.props.history.push({
          pathname: "./bus-station-page",
        });
      };
    render() {
        return (
            <div className="aa-buspage-container">
                <div className="aa-buspage-stop-station-container">
                    <div className="aa-buspage-station-container" onClick={this.BusStationRedirectHandler}>
                        <h2>Bus Station :</h2>
                        <p>LandMark: Near three road Signal</p>
                    </div>
                    <div className="aa-buspage-stop-container">
                        <div className="aa-buspage-stop-heading-container">
                            <h2>Bus Stops</h2>
                        </div>
                        <div className="aa-buspage-stop-details-container-item">
                            <p>KG School Bus Stop</p>
                            <p>Land Mark: Opposite of KG School</p>
                        </div>
                        <div className="aa-buspage-stop-details-container-item">
                            <p>KG School Bus Stop</p>
                            <p>Land Mark: Opposite of KG School</p>
                        </div>
                        <div className="aa-buspage-stop-details-container-item">
                            <p>KG School Bus Stop</p>
                            <p>Land Mark: Opposite of KG School</p>
                        </div>
                        <div className="aa-buspage-stop-details-container-item">
                            <p>KG School Bus Stop</p>
                            <p>Land Mark: Opposite of KG School</p>
                        </div>
                        <div className="aa-buspage-stop-details-container-item">
                            <p>KG School Bus Stop</p>
                            <p>Land Mark: Opposite of KG School</p>
                        </div>
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

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(BusPage)
