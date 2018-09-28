import React from 'react';

import { VOTERS_QUERY } from '../queries/voter/VotersQuery';
import { VoterTableContainer } from './voter/VoterTableContainer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ElectionManagement } from "./election-management/ElectionManagement";
import logo from '../images/logo.png';
import {VoterFormMutation} from '../mutations/voter/VoterFormMutation'

import {ElectionSelectionQuery} from '../queries/ElectionSelectionQuery';
import {LoginMutation} from '../mutations/LoginMutation';
import {Switch } from "react-router-dom";
import {SelectedBallotQuery} from '../queries/SelectedBallotQuery';
import {VoterRegisteredSubscription, VoterReplacedSubscription, VoterDeletedSubscription } from '../subscription';
import {Home} from './HomeComponent';
import {About} from './AboutComponent';
import {Voters} from './VotersComponent';
export const App = () => (
  <React.Fragment>
  <Router>
  <div id="container" className="container">
        <div id="pageHeader" className="pageHeader">
        <img className="teamLogo" src={logo}/>
          <h1>Winterland Election Commission</h1></div>
          <div id="leftColumn" className="leftColumn">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/voters/register">Voters</Link>
                <Route path="/voters" component={Voters} />
              </li>
              <li>
                <Link to="/manageElection">Manage Elections</Link>
              </li>
              <li>
                <Link to="/campaign/">Campaign</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <div>
          <SwitchComponent />
        </div>
      </div>

  </Router>
  <VoterRegisteredSubscription refetchQueries={[{ query: VOTERS_QUERY }]}/>
  <VoterReplacedSubscription refetchQueries={[{ query: VOTERS_QUERY }]}/>
  <VoterDeletedSubscription refetchQueries={[{ query: VOTERS_QUERY }]}/>
  </React.Fragment>
);



const SwitchComponent = (history)=> {
  return<Switch>
    <div className="rightColumn">
      <Route exact path="/" component={Home} />
      <Route path="/voters/voterlist" component={VotersList} />
      <Route path="/voters/register" component={Register} />
      <Route path="/manageElection" component={ManageElection} />
      <Route exact path="/campaign/" component={ElectionSelectionQuery} />
      <Route path="/campaign/:ballotId/login" component={LoginMutation}/>
      <Route path="/campaign/:ballotId/:userId/VotePage" component={SelectedBallotQuery}/>
      <Route path="/about" component={About} />
    </div>
  </Switch>;
}






export const Register = () =>
  <React.Fragment>
    <h3>Be a Winterland supporter by voting for the local elections. Start making the difference by registering today.</h3>
   <VoterFormMutation refetchQueries={[{ query: VOTERS_QUERY }]}/>
  </React.Fragment>;

export const VotersList = () =>
  <React.Fragment>
    <h3>Registered voters from Winterland.</h3>
    <VoterTableContainer refetchQueries={[{ query: VOTERS_QUERY }]}/>
  </React.Fragment>;

export const ManageElection = () =>
  <React.Fragment>
   <ElectionManagement />
  </React.Fragment>;

export const Elections = () =>
  <React.Fragment>
  </React.Fragment>;
