import React, { useContext } from 'react';
import { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from '../components/login/Login';

const GuardedRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth === true ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

export default GuardedRoute;
