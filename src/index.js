import "react-app-polyfill/ie9";
import "./blobPolyfill";
// Polyfill For URL
import "./urlPolyfill";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./Spinny/store/configureStore";
import ReactDOM from "react-dom";
import App from "./Spinny/components/App";

// import registerServiceWorker from './serviceWorker/registerServiceWorker';
const store = configureStore(window.__REDUX_STATE__ || {});

ReactDOM.render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>,
  document.getElementById("root")
);

//registerServiceWorker();
