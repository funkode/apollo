import React from 'react';
import { VOTERS_QUERY } from '../queries/voter/VotersQuery';
import { VoterTableContainer } from './voter/VoterTableContainer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CreateElection } from "./election-management/CreateElection";

import {VoterFormMutation} from '../mutations/voter/VoterFormMutation' 

export const App = () => (
  <React.Fragment>
    <Router>
      <div id="container" class="container">
        <div class="header"><h3>Winterland Election Commission</h3></div>
        <div id="leftColumn" class="leftColumn">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/voters">Voters</Link>
              <Route path="/voters" component={Voters} />
            </li>
            <li>
              <Link to="/manageelections">Manage Elections</Link>
            </li>
            <li>
              <Link to="/elections">Elections</Link>
            </li>
          </ul>
        </div>

        <div id="rightColumn" class="rightColumn">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/campaign" component={Elections} />
          <Route path="/Register" component={Register} />
          <Route path="/voterlist" component={VotersList} />
          <Route path="/manageelections" component={ManageElection} />
        </div>
      </div>
    </Router>
  </React.Fragment>
);


export const Home = () =>
  <React.Fragment>
    <h5>Welcome to The Election Commission of Winterland</h5>
    
  </React.Fragment>;

export const About = () =>
  <React.Fragment>
    <h1>The glorious team behind this awesome initiative!</h1>
  </React.Fragment>;

export const Voters = () =>
  <React.Fragment>
    <ul>
      <li>
        <Link to="/voterlist">VotersList</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </ul>
    
  </React.Fragment>;

export const Register = () =>
  <React.Fragment>
    <h5>Be a Winterland supporter by voting for the local elections. Start making the difference by registering today.</h5>
   <VoterFormMutation refetchQueries={[{ query: VOTERS_QUERY }]}/>
  </React.Fragment>;

export const VotersList = () =>
  <React.Fragment>
    <h1>Registered voters from Winterland.</h1>
    <VoterTableContainer refetchQueries={[{ query: VOTERS_QUERY }]}/>
  </React.Fragment>;  

export const ManageElection = () =>
  <React.Fragment>
   <CreateElection />
  </React.Fragment>;

export const Elections = () =>
  <React.Fragment>
    <h5>Todd, your component goes in here...</h5>
  </React.Fragment>;
