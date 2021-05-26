import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import RegistrationPage from "./pages/RegistrationPage";
import UserContextProvider from "./contexts/UserContext";
import MovieContextProvider from "./contexts/MovieContext";
import "./css/App.css";
import Navbar from "./components/Navbar";
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
            <Route exact path="/registration" component={RegistrationPage} />
          </Switch>
        </BrowserRouter>
        </MovieContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;