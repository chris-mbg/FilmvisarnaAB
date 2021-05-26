import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./css/App.css"
import MovieContextProvider from "./contexts/MovieContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MovieContextProvider>
          <Route exact path="/" component={HomePage}/>
        </MovieContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
