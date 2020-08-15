import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
// import Loadable from 'react-loadable';
import { onRouteChangeEvent } from "./onRoutesChange";
import { getPathByName } from "./routerManager";
// import ErrorRetry from "../components/ErrorRetry/ErrorRetry";
import RouteHandlingComponent from "../components/RouteHandling";
import LazyloadComponent from "./LazyloadComponent";
import AsyncPageNotFound from "../components/PageNotFound";

// const LoadingFallback = (props) => {
//   if (props.error) {
//     return <ErrorRetry error retryAction={props.retry.bind(this)} />;
//   }
//   return null;
// };

const AsyncAnime = import(
  /* webpackChunkName: "Spinny_platform_details" */ "../components/Platform/Anime/AnimeContainer"
);

const RouteHandling = {
  path: getPathByName("routeHandling"),
  component: RouteHandlingComponent,
  exact: true
};


export const routes = [
  {
    path: getPathByName('/anime'),
    component: AsyncAnime,
    exact: true
  }
];

class Router extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      onRouteChangeEvent("data from route changes");
    }
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route
            path={RouteHandling.path}
            component={RouteHandling.component}
            exact={RouteHandling.exact}
          />
          {routes.map((r, i) => {
            return (
              <Route
                path={r.path}
                render={props => (
                  <LazyloadComponent component={r.component} {...props} />
                )}
                key={i}
                exact
              />
            );
          })}
          <Route component={AsyncPageNotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(Router);
