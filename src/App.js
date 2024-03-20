import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Character } from "./Pages/Character";
export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/character">
            <Character />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
