import React from "react";
import { Route } from "react-router-dom";

const PublicRoute = (props) => {
  const { wrapper: Wrapper, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Wrapper>
          {" "}
          <Component {...props} />{" "}
        </Wrapper>
      )}
    />
  );
};

export default PublicRoute;
