import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetStarted from "./screens/GetStarted";
import Welcome from "./screens/Welcome";
import Splash from "./screens/Splash";
import React from "react";

function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" exact element ={<Splash/>}/>
        <Route path="/welcome" exact element ={<Welcome/>}/>
        <Route path="/started" exact element ={<GetStarted/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
