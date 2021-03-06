import React from 'react';
import gql from 'graphql-tag'
import {Query} from 'react-apollo';
import {SetSelectedBallotMutation} from '../mutations/SetSelectedBallotMutation';
const ELECTIONS_SELECTION_QUERY= gql`
query{
  getElections{
    id
    name
  }
}
`;
export const ElectionSelectionQuery= (props)=>
  <Query query={ELECTIONS_SELECTION_QUERY}>
    {({data,loading,error}) => {
      if (loading) {
        return null;
      }
      if (error) {
        console.log(error);
        return null;
      }
      console.log("data",data.getElections);
      const electionsList=data.getElections.slice();
      return <SetSelectedBallotMutation {...props} refetchQueries={[{query: ELECTIONS_SELECTION_QUERY}]} ballotsList={electionsList}/>;

    }}
  </Query>
