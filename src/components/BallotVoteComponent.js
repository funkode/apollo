import React from 'react';
import {BallotVoteItem} from './BallotVoteItem';
import {Router, Route,Switch, Link } from "react-router-dom";
export const BallotVoteComponent = (props) =>{
  //console.log("BallotVoteComponent Props",props);
  const questionList = props.questions.map(question=>{
    const selected=props.selectedQuestions.includes(question.id);
    return <BallotVoteItem  voteCheckListener={props.voteCheckListener} checked = {selected} questionObject={question}/>
  })

  return <React.Fragment>
    <h1>Ballots</h1>
    <table>
		  <thead>
        <tr>
          <th>Poll</th>
          <th>Vote</th>
        </tr>
      </thead>
      <tbody>
      {questionList}
      </tbody>

    </table>
    <button onClick= {()=>props.onVote()}>CAST VOTE</button>
  </React.Fragment>
}
BallotVoteComponent.defaultProps={
  questions:[],
  selectedQuestions:[]
}
