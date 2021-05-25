import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./css/App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={HomePage}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
