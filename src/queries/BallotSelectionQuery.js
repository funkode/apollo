import React from 'react';
import gql from 'graphql-tag'
import {Query} from 'react-apollo';
import {SetSelectedBallotMutation} from '../mutations/SetSelectedBallotMutation';
const BALLOT_SELECTION_QUERY= gql`
query{
  getBallots{
    id
    name
    questions{
      id
      question
    }
  }
}
`;
export const BallotSelectionQuery= (props)=>
  <Query query={BALLOT_SELECTION_QUERY}>
    {({data,loading,error}) => {
      if (loading) {
        return null;
      }
      if (error) {
        console.log(error);
        return null;
      }
      console.log("data",data.getBallots);
      const ballotsList=data.getBallots;
      return <SetSelectedBallotMutation {...props} refetchQueries={[{query: BALLOT_SELECTION_QUERY}]} ballotsList={ballotsList}/>;

    }}
  </Query>
