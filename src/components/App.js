import React from 'react';
import {BallotSelectionComponent} from './BallotSelectionComponent';
import {BallotSelectionQuery} from '../queries/BallotSelectionQuery';
import {LoginFormComponent} from './LoginFormComponent';
import {LoginMutation} from '../mutations/LoginMutation';
import {Router, Route,Switch, Link } from "react-router-dom";
import {BallotVoteComponent} from './BallotVoteComponent';
import {SelectedBallotQuery} from '../queries/SelectedBallotQuery';
const SwitchComponent = (history)=> {
  return<Switch>
  <Route exact path= "/" component={helloWorld}/>
  <Route exact path="/:ballotId/login" component={LoginMutation}/>
  <Route exact path="/ballotSelection" component={BallotSelectionQuery} />
  <Route path="/hello" component={BallotSelectionQuery} />
  <Route path="/:ballotId/VotePage" component={SelectedBallotQuery}/>
  </Switch>;
}
const helloWorld = () =>{
  return <React.Fragment><Link to="/ballotSelection">BALLOTS</Link></React.Fragment>
}

export const App = () =>
  <React.Fragment>
    <SwitchComponent />
  </React.Fragment>;
