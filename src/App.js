import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import OrderPage from './pages/OrderPage';
import RegistrationPage from './pages/RegistrationPage';
import ProfilePage from './pages/ProfilePage';
import UserContextProvider from './contexts/UserContext';
import MovieContextProvider from './contexts/MovieContext';
import './css/App.css';
import Navbar from './components/Navbar';
import ReservationContextProvider from './contexts/ReservationContext';
import Footer from './components/Footer';
import GuardedRoute from './components/GuardedRoute';

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  // function login() {
  //   setisAuthenticated(true);
  //   console.log('loggedInUser:' + isAuthenticated);
  // }

  // function logout() {
  //   setisAuthenticated(false);
  //   console.log('loggedInUser:' + isAuthenticated);
  // }

  return (
    <div className='App'>
      <UserContextProvider>
        <MovieContextProvider>
          <ReservationContextProvider>
            <BrowserRouter>
              <Navbar />
              <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/movies/:movieId' component={MoviePage} />

                <GuardedRoute
                  exact
                  path='/order/:movieId/:screeningId?'
                  component={OrderPage}
                  auth={isAuthenticated}
                />
                <Route
                  exact
                  path='/registration'
                  component={RegistrationPage}
                />
                <GuardedRoute
                  exact
                  path='/profile'
                  component={ProfilePage}
                  auth={isAuthenticated}
                />
              </Switch>
            </BrowserRouter>
          </ReservationContextProvider>
        </MovieContextProvider>
      </UserContextProvider>
      <Footer />
    </div>
  );
}

export default App;
