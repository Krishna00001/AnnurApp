import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import persistState from "redux-localstorage";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import Routes from "./__router";
import * as serviceWorker from "./serviceWorker";

const store = createStore(compose(applyMiddleware(thunk), persistState()));

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
