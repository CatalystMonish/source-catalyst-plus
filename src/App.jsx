import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetStarted from "./screens/GetStarted";
import Welcome from "./screens/Welcome";
import Splash from "./screens/Splash";
import HomeLayout from "./layouts/HomeLayout";
import HomeScreen from "./screens/HomeScreen";
import ProjectScreen from "./screens/ProjectScreen";
import EventScreen from "./screens/EventScreen";
import LoginScreen from "./screens/LoginScreen.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import Protected from "./components/Protected";
import React from "react";
import OngoingProjectScreen from "./screens/OngoingProjectScreen.jsx";
import {LoadingProvider} from "./context/LoadingContext.jsx";

function App() {
  return (
    <div>
      <LoadingProvider>
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route index exact element={<Splash />} />
          <Route path="/welcome" exact element={<Welcome />} />
          <Route path="/started" exact element={<GetStarted />} />
          <Route path="/login" exact element={   <LoginScreen/>  }/>


          <Route path="/ongoing" exact element={<Protected><OngoingProjectScreen/></Protected>}/>




          <Route element={<Protected><HomeLayout /> </Protected>}>
            <Route
              path="/layout_home"
              element={
                  <HomeLayout />
              }
            />
            <Route
              path="/home"
              element={
                  <HomeScreen />
              }
            />
            <Route
              path="/projects"
              element={
                  <ProjectScreen />
              }
            />
               <Route
              path="/events"
              element={
                  <EventScreen />
              }
            />

          </Route>
        </Routes>
      </Router>
    </AuthContextProvider>
        </LoadingProvider>
    </div>
  );
}

export default App;
