import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from '../components/login/Login';
import { Modal } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/ModalHeader';
import style from '../css/Login.module.css';

const GuardedRoute = ({ component: Component, ...rest }) => {
  const { setShowLogin, loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
  console.log(rest);
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedInUser !== null || undefined ? (
          <Component {...rest} {...props} />
        ) : (
          <>
            {setShowLogin(true)}
            <Redirect exact path to='/' component={Login} />
          </>
        )
      }
    />
  );
};

export default GuardedRoute;
