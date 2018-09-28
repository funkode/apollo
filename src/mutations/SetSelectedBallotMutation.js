import React from 'react';
import gql from 'graphql-tag';
//import {DeleteCheckedCarsMutation} from './DeleteCheckedCarsMutation'
import {Mutation} from  'react-apollo';
import {BallotSelectionComponent} from '../components/BallotSelectionComponent';

export const SET_SELECTED_BALLOT_MUTATION= gql `
  mutation SetSelectedBallotMutation($ballot: Ballot){
    setSelectedBallot (selectedBallot :$ballot) @client
  }
`;

export const SetSelectedBallotMutation=(props)=>
<Mutation mutation={SET_SELECTED_BALLOT_MUTATION} >
  {(mutate)=>{
     const setSelectedBallot= (ballot) =>{
       return mutate({
         variables: { ballot: ballot}
       })
      };
      // const cancelCar= ()=> editCarId({id:-1});
    return <BallotSelectionComponent {...props} setSelectedBallot={setSelectedBallot}/>;
  }}
  </Mutation>
