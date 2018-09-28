import React from 'react';
import gql from 'graphql-tag';
import {Mutation} from  'react-apollo';

import {VoteCheckListener} from '../components/VoteCheckListener'
export const SAVE_BALLOT_MUTATION= gql `
  mutation saveBallot($ballot:Ballot){
    createBallot(ballot:$ballot)
  }
`;

export const SaveBallotMutation=(props)=>{
  const onCompletionFunc=(result)=>{
    console.log(props);
    props.history.push('/campaign/');
  };
  return <Mutation mutation={SAVE_BALLOT_MUTATION} onCompleted={onCompletionFunc}>
  {(mutate)=>{
     const createBallot= ballot =>{
       return mutate({
          variables: { ballot: ballot },
        })
      };
    return <VoteCheckListener {...props} createBallot={createBallot} />;
  }}
  </Mutation>
}
