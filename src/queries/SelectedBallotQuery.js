import React from 'react';
import gql from 'graphql-tag';
import {BallotVoteComponent} from '../components/BallotVoteComponent';
import {Query} from 'react-apollo';

const SELECTED_BALLOT_QUERY= gql`
  query{
    selectedBallot @client
  }
`;
const GET_BALLOT_QUERY = gql`query($lid:ID){
  getBallot(lid:$lid){
    id
    name
    questions {
      id
      question
    }
  }

}`
export const SelectedBallotQuery= props =><Query query={SELECTED_BALLOT_QUERY} >
  {({data,loading,error}) => {
    if (loading) {
      return null;
    }
    if (error) {
      console.log(error);
      return null;
    }
    console.log("SelectedBallot",data.selectedBallot.questions);
    const questions = data.selectedBallot.questions;
    if(questions===undefined||questions==={}){
      return <Query query={GET_BALLOT_QUERY} variables={{lid : props.match.params.ballotId}}>
         {({data,loading,error}) => {
         if (loading) {
           return null;
         }
         if (error) {
           console.log(error);
           return null;
         }
         console.log("GET_BALLOT_QUERY",data.getBallot.questions);
         const questions=data.getBallot.questions;
         return <React.Fragment>
          <BallotVoteComponent questions = {questions} {...props}/>
         </React.Fragment>

       }}
       </Query>
    }
    return <React.Fragment>
    <BallotVoteComponent questions = {questions} {...props}/>
    </React.Fragment>
  }}
</Query>;
