import React from "react";
import { HomePage } from '../pages/HomePage';
import { ErrorPage } from '../pages/ErrorPage';
import { ContactPage } from '../pages/ContactPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { NavBar } from "../components/navbar/NavBar";
import { ShopPage } from '../pages/ShopPage';
import { Footer } from "../components/footer/Footer";

export default function ClayRoutes() {
  return (
    <Router>
      <div>
        <NavBar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/error" component={ErrorPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/" component={HomePage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
