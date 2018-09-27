import { graphql } from 'react-apollo';

import gql from 'graphql-tag';

export const MESSAGE_QUERY = gql`
  query MessageQuery {
    message
  }
`;

export const withMessageQuery = graphql(MESSAGE_QUERY, {
  props: ({ data }) => ({
    message: data.message,
  }),
});