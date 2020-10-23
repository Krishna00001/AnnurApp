import React from "react";
import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Switch, Redirect } from "react-router-dom";
import { MinimalWrapper, NotFound } from "../__components";
import { HomePage, MenuPage, SearchLocation,BusPage, BusStation } from "../MobilePages";

const history = createBrowserHistory();

const Routes = (props) => {
  return (
    <>
      <Router history={history}>
        <Route path="/home-page" component={HomePage} />
        <Route path="/menu-page" component={MenuPage} />
        <Route path="/search-location-page" component={SearchLocation} />
        <Route path="/bus-page" component={BusPage} />
        <Route path="/bus-station-page" component={BusStation} />
      </Router>
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, null)(Routes);
