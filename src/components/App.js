import React from 'react';
import { VOTERS_QUERY } from '../queries/voter/VotersQuery';
import { VoterTableContainer } from './voter/VoterTableContainer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {VoterFormMutation} from '../mutations/voter/VoterFormMutation' 

export const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/vote">Vote</Link>
        </li>
        <li>
          <Link to="/campaign">Campaign</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/register" component={Register} />
      <Route path="/vote" component={Vote} />
      <Route path="/campaign" component={Elections} />
    </div>
  </Router>
);


export const Home = () =>
  <React.Fragment>
    <h1>Welcome to Election Commission of United States</h1>
    
  </React.Fragment>;

export const About = () =>
  <React.Fragment>
    <h1>The glorious team behind this awesome initiative!</h1>
  </React.Fragment>;

export const Register = () =>
  <React.Fragment>
    <h1>Be a United States supporter by participating in voting for the election campagins. To get active, please get registered.</h1>
    <VoterTableContainer refetchQueries={[{ query: VOTERS_QUERY }]}/>
    <VoterFormMutation refetchQueries={[{ query: VOTERS_QUERY }]}/>
  </React.Fragment>;

export const Vote = () =>
  <React.Fragment>
    <h1>Shelley your component goes here...</h1>
  </React.Fragment>;
  
export const Elections = () =>
  <React.Fragment>
    <h1>Todd, your component goes in here...</h1>
  </React.Fragment>;
