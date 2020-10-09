import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
  const { wrapper: Wrapper, component: Component, routes, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(p) =>
        props.isUserLoggedin ? (
          <Wrapper>
            {" "}
            <Component {...props} />{" "}
          </Wrapper>
        ) : (
          <Redirect to="/sign-in" />
        )
      }
    />
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, null)(PrivateRoute);
