import React from 'react';
import gql from 'graphql-tag';

import { SubscriptionInfoNotification } from './SubscriptionInfoNotification';


export const VOTER_REPLACED_SUBSCRIPTION = gql`
  subscription VoterReplaed {
    voterReplaced {
      firstName
      lastName
    }
  }
`;

export const VoterReplacedSubscription = props => {
  return <SubscriptionInfoNotification subscription={VOTER_REPLACED_SUBSCRIPTION} {...props}>
    {({ voterReplaced: { firstName, lastName } }) => <span>{lastName}, {firstName} updated successfully!</span>}
  </SubscriptionInfoNotification>;
};
