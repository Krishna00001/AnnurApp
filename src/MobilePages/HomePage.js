import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import "./index.css";

class HomePage extends Component {
  RedirectHandler = () => {
    this.props.history.push({
      pathname: "./search-location-page",
    });
  };
  render() {
    return (
      <div className="aa-homepage-container">
        <div className="aa-homepage-top-container">
          <h1>
            Basic app for{" "}
            <span className="aa-homepage-coloured-heading">LOCALS</span>
          </h1>
        </div>
        <div className="aa-homepage-bottom-container">
          <button
            className="aa-homepage-facebook-button homepage-button"
            onClick={this.RedirectHandler}
          >
            Login with Facebook
          </button>
          <button
            className="aa-homepage-google-button homepage-button"
            onClick={this.RedirectHandler}
          >
            Login with Google
          </button>
          <button
            className="aa-homepage-phone-button homepage-button"
            onClick={this.RedirectHandler}
          >
            Login with Phone
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);
