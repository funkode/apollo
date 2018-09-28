import React from 'react';
import gql from 'graphql-tag';

import { SubscriptionInfoNotification } from './SubscriptionInfoNotification';


export const VOTER_REGISTERED_SUBSCRIPTION = gql`
  subscription VoterRegistered {
    voterRegistered {
      firstName
      lastName
    }
  }
`;

export const VoterRegisteredSubscription = props => {
  return <SubscriptionInfoNotification subscription={VOTER_REGISTERED_SUBSCRIPTION} {...props}>
    {({ voterRegistered: { firstName, lastName } }) => <span>{lastName}, {firstName} registered with Winterland elections!</span>}
  </SubscriptionInfoNotification>;
};
