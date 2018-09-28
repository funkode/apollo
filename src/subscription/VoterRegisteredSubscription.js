import React from 'react';
import gql from 'graphql-tag';

import { SubscriptionInfoNotification } from './SubscriptionInfoNotification';


export const VOTER_DELETED_SUBSCRIPTION = gql`
  subscription VoterDeleted {
    voterDeleted {
      firstName
      lastName
    }
  }
`;

export const VoterRegisteredSubscription = props => {
  return <SubscriptionInfoNotification subscription={VOTER_DELETED_SUBSCRIPTION} {...props}>
    {({ voterDeleted: { firstName, lastName } }) => <span>{lastName}, {firstName} removed from Winterland elections!</span>}
  </SubscriptionInfoNotification>;
};
