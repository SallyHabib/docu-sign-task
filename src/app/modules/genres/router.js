import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MusicGenres from './components/MusicGenres';
import SignupButton from './components/signup-button';

const Genreroutes = () => {
  console.log("kkk")
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignupButton} />

        <Route path="/genre" component={MusicGenres} />

      </Switch>

    </Router>
  )
};

export default Genreroutes;