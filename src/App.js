import React from "react";
import { Home } from "./components/home";
import { Login } from "./components/login";
import { Reports } from "./components/reports";
import { Logout } from "./components/logout";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./helpers/private-routes";
function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" Component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <PrivateRoute exact path="/home" Component={Home} />
        <PrivateRoute exact path="/reports" Component={Reports} />
      </Switch>
    </Router>
  );
}

export default App;
