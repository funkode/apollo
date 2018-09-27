import React from 'react';
import {BallotVoteItem} from './BallotVoteItem';
import {Router, Route,Switch, Link } from "react-router-dom";
export const BallotVoteComponent = (props) =>{
  console.log("BallotVoteComponent Props",props);
  const questionList = props.questions.map(question=><BallotVoteItem question={question}/>)

  return <React.Fragment>
    <h1>Ballots</h1>
    <table>
		  <thead>
        <tr>
          <th>Poll</th>
          <th>Vote</th>
        </tr>
      </thead>
      {questionList}

    </table>
  </React.Fragment>
}
BallotVoteComponent.defaultProps={
  questions:[]
}
