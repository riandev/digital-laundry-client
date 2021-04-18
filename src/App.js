import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Booking from "./components/Booking/Booking/Booking";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Login from "./components/Login/Login/Login";
import { createContext, useState} from "react";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import SignUp from "./components/SignUp/SignUp";

export const userContext=createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/bookings">
          <Booking></Booking>
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/signup">
          <SignUp></SignUp>
        </Route>
      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
