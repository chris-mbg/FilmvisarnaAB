import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./css/App.css"
import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={HomePage}/>
      </BrowserRouter>
    </div>
  );
}

export default App;