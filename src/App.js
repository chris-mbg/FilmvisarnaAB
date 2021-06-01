import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import OrderPage from "./pages/OrderPage";
import RegistrationPage from "./pages/RegistrationPage";
import ProfilePage from "./pages/ProfilePage";
import UserContextProvider from "./contexts/UserContext";
import MovieContextProvider from "./contexts/MovieContext";
import "./css/App.css";
import Navbar from "./components/Navbar";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <MovieContextProvider>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/movies/:movieId" component={MoviePage} />
              <Route exact path="/order" component={OrderPage} />
              <Route exact path="/registration" component={RegistrationPage} />
              <Route exact path="/profile" component={ProfilePage} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </BrowserRouter>
        </MovieContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
