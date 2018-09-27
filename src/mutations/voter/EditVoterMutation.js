import React from 'react';
import gql from 'graphql-tag';


export const withEditVoterMutation = TheComponent => {

  return props => {

    const editVoter = voterId => {
      props.client.writeQuery({
        query: gql`query EditVoterId { editVoterId @client }`,
        data: { editVoterId: voterId },
      });
    };

    const cancelVoter = () => editVoter('-1');

    return <TheComponent {...props} onEditVoter={editVoter} onCancelVoter={cancelVoter} />;

  };
};

