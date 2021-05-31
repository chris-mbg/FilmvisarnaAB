import React from 'react';
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
import Login from './components/login/Login';
import Header from './components/Header';

export const AuthContext = React.createContext();
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('token', JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'LOGOUT':
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <AuthContext.Provider>
      <Header />
      <div className='App'>
        {!state.isAuthenticated ? <Login /> : <HomePage />}
        <UserContextProvider>
          <MovieContextProvider>
            <BrowserRouter>
              <Navbar />
              <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/movies/:movieId' component={MoviePage} />
                <Route exact path='/order' component={OrderPage} />
                <Route
                  exact
                  path='/registration'
                  component={RegistrationPage}
                />
                <Route exact path='/profile' component={ProfilePage} />
              </Switch>
            </BrowserRouter>
          </MovieContextProvider>
        </UserContextProvider>
        <Login />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
