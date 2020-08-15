// React Imports
import React from "react";
import { withRouter } from "react-router-dom";
import Router from "../routes/routes";
// import ErrorRetry from './ErrorRetry';

// Redux Imports
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Node Module Imports
import AOS from "aos";
import { ToastContainer } from "react-toastify";

// Stylesheet Imports
import "../commonstyles/common.scss";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";

const mapStateToProps = (state, prevProps) => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

class App extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1000
    });
  }

  componentDidUpdate(prevProps) {}

  render() {
    return (
      <div className="App">
        <ToastContainer autoClose={3000} />
        <Router />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
