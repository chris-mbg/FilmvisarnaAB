import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from '../components/login/Login';
import { Modal } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/ModalHeader';
import style from '../css/Login.module.css';

// function GuardedRoute({ props, component: Component, auth, ...rest }) {
//   const { handleCloseLoginModal, handleShowLoginModal } =
//     useContext(UserContext);

//   <Route
//     {...rest}
//     render={(props) =>
//       auth === true ? (
//         <Component {...rest} {...props} />
//       ) : (
//         <Redirect to={handleShowLoginModal} component={Login} />
//       )
//     }
//   />;
// }

const GuardedRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth === true ? (
        <Component {...rest} {...props} />
      ) : (
        <Redirect exact path to='/' component={Login} />
      )
    }
  />
);

export default GuardedRoute;
