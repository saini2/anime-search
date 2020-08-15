import React from "react";
import Loader from "../shared/Loader";

export default class AppIndex extends React.Component {
  state = {
    renderComponent: null
  };

  componentDidMount() {
    if (this.props.feature === "Spinny") {
      import(/* webpackChunkName: "Spinny_platform" */ "./App").then(response => {
        this.setState({
          renderComponent: response.default
        });
      });
    }
  }

  render() {
    if (this.state.renderComponent) return <this.state.renderComponent />;
    return <Loader />;
  }
}
