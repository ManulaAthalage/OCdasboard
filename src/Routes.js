import React from "react";
import View from "./components/View";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";

export const routings = [
  { path: "/", name: "Home", showInNav: true, component: View },
  {
    path: "/test",
    name: "Daily Stats Report",
    showInNav: true,
    component: Home,
  },
];

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        {routings.map((key, index) => (
          <Route key={index} exact path={key.path} component={key.component} />
        ))}
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
