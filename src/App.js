import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import UserContextProvider from "./contexts/UserContext";
import "./css/App.css";
function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/registration" component={RegistrationPage} />
          </Switch>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
