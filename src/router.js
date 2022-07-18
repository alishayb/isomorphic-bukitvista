import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import App from "./containers/App/App";

const PublicRoutes = ({ history, isLoggedIn }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route path="" render={(props) => <App {...props} />} />
      </div>
    </ConnectedRouter>
  );
};

export default PublicRoutes;
