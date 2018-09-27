import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const TOOL_NAME_QUERY = gql`
  query ToolNameQuery {
    toolName @client
  }
`;

export const withToolNameQuery = graphql(TOOL_NAME_QUERY, {
  props: ({ data }) => ({
    loading: data.loading,
    error: data.error,
    headerText: data.toolName,
  }),
});
