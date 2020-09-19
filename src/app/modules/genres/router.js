import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MusicGenres from './components/MusicGenres';
import Signup from './components/Signup';

const Genreroutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Signup} />

        <Route path="/genre" component={MusicGenres} />

      </Switch>

    </Router>
  )
};

export default Genreroutes;