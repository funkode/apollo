import React from 'react';

import { VOTERS_QUERY } from '../queries/voter/VotersQuery';
import { VoterTableContainer } from './voter/VoterTableContainer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CreateElection } from "./election-management/CreateElection";

import {VoterFormMutation} from '../mutations/voter/VoterFormMutation' 

import {BallotSelectionComponent} from './BallotSelectionComponent';
import {BallotSelectionQuery} from '../queries/BallotSelectionQuery';
import {LoginFormComponent} from './LoginFormComponent';
import {LoginMutation} from '../mutations/LoginMutation';
import {Switch } from "react-router-dom";
import {BallotVoteComponent} from './BallotVoteComponent';
import {SelectedBallotQuery} from '../queries/SelectedBallotQuery';

export const App = () => (
  <React.Fragment>
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
          <Link to="/manageElection">Manage Election</Link>
        </li>
        <li>
          <Link to="/campaign">Campaign</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/register" component={Register} />
      <Route path="/manageElection" component={ManageElection} />
      <Route path="/campaign" component={Elections} />
    </div>
  </Router>
  <SwitchComponent/>
  </React.Fragment>
);



const SwitchComponent = (history)=> {
  return<Switch>
  <Route exact path="/campaign/:ballotId/login" component={LoginMutation}/>
  <Route exact path="/campaign/ballotSelection" component={BallotSelectionQuery} />
  <Route path="/campaign/:ballotId/VotePage" component={SelectedBallotQuery}/>
  </Switch>;
}


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

export const ManageElection = () =>
  <React.Fragment>
   <CreateElection />
  </React.Fragment>;
  
export const Elections = () =>
  <React.Fragment>
    <h1>Todd, your component goes in here...</h1>
    <SwitchComponent />
  </React.Fragment>;
