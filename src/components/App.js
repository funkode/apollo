import React from 'react';

import { VOTERS_QUERY } from '../queries/voter/VotersQuery';
import { VoterTableContainer } from './voter/VoterTableContainer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ElectionManagement } from "./election-management/ElectionManagement";

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
              <Link to="/manageElection">Manage Elections</Link>
            </li>
            <li>
              <Link to="/campaign">Campaign</Link>
            </li>
          </ul>
        </div>
        <div>
        <hr />
      <SwitchComponent />
      </div>
      </div>

  </Router>

  </React.Fragment>
);



const SwitchComponent = (history)=> {
  return<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/register" component={Register} />
  <Route path="/manageElection" component={ManageElection} />
  <Route exact path="/campaign/" component={BallotSelectionQuery} />
  <Route path="/campaign/:ballotId/login" component={LoginMutation}/>
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
   <ElectionManagement />
  </React.Fragment>;

export const Elections = () =>
  <React.Fragment>

  </React.Fragment>;
