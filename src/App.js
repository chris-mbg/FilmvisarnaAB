import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/registration" component={RegistrationPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
