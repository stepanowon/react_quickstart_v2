import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './auth';

function ProtectedRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
        auth.isMatchToRoles(location.pathname) ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default ProtectedRoute;