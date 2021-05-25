import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import "./css/App.css"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={HomePage}/>
          <Route exact path="/registration" component={RegistrationPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
