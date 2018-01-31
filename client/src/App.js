import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Mainpage from "./pages/Mainpage";
import Profile from "./pages/Profile";
import LandingPage from "./pages/LandingPage";
import MoviePage from "./pages/MoviePage";

const App = () =>
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/movies" component={Mainpage} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/welcome" component={Welcome} />
                <Route exact path="/MoviePage/:id" component={MoviePage} />
            </Switch>
        </div>
    </Router>
export default App;