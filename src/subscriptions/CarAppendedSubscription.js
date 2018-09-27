import React from 'react';
import { Subscription, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

import { InfoNotification } from '../components';

const CAR_APPENDED_SUBSCRIPTION = gql`
  subscription CarAppendedSubscription {
    carAppended {
      id
      make
      model
      year
    }
  }
`;

export const CarAppendedSubscription = props => {

  return <Subscription subscription={CAR_APPENDED_SUBSCRIPTION}>
    {({ data, loading, error }) => {

      if (error) {
        console.error(error);
        return null;
      }

      if (!loading) {
        const { make, model, year} = data.carAppended;

        return <ApolloConsumer>
          {client => {

            if (Array.isArray(props.refetchQueries)) {

              console.log('refetch started');
              
              Promise.all(props.refetchQueries.map(refetchQuery => {
                return client.query({
                  fetchPolicy: 'network-only',
                  ...refetchQuery
                });
              })).then(() => {
                console.log('refetch completed');
              });
            
            }

            return <InfoNotification>
              A new {year} {make} {model} was added!
            </InfoNotification>;

          }}
        </ApolloConsumer>;


      }

      return null;

    }}
  </Subscription>;

};