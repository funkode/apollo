import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { VoterForm } from '../../components/voter';

const REGISTER_VOTER_MUTATION = gql`
  mutation RegisterVoterMutation($voter: RegisterCar) {
    registerVoter(voter: $voter) {
      id
      firstName
      lastName
      address
      city
      birthdate
      email
      phone
    }
  }
`;

export const VoterFormMutation = ({ refetchQueries }) => {
    return <Mutation mutation={REGISTER_VOTER_MUTATION}>
      {mutate => {
        const registerVoter = widget => {
          return mutate({
            variables: { widget },
            refetchQueries,
          });
        };
        return <VoterForm onSubmitVoter={registerVoter} buttonText="Register Voter" />;
      }}
    </Mutation>;
  };

VoterFormMutation.propTypes = {
  refetchQueries: PropTypes.array.isRequired,
};