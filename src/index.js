import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';

import { WebSocketLink } from 'apollo-link-ws';
import { split, ApolloLink } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';

import { withClientState } from 'apollo-link-state';
import {BrowserRouter } from "react-router-dom";

import gql from 'graphql-tag';

import { App } from './components/App';

const GRAPHQL_PORT = process.env.REACT_APP_GRAPHQL_PORT;

const cache = new InMemoryCache();

const updateSelectedVoterId = selectedVoterIdFn => (_1, { voterId }, { cache }) => {

  const SELECTED_VOTER_IDS_QUERY = gql`
    query SelectedVoterIdsQuery {
      selectedVoterIds
    }
  `;

  const query = cache.readQuery({ query: SELECTED_VOTER_IDS_QUERY  });
  const data = { ...query, selectedVoterIds: selectedVoterIdFn(query.selectedVoterIds, voterId) };
  cache.writeQuery({ query: SELECTED_VOTER_IDS_QUERY, data });
};

const clientStateLink = withClientState({
  cache,
  defaults: {
    toolName: 'Car Tool',
    editVoterId: -1,
    selectedVoterIds: [],
    selectedBallot:{
      id:-1,
      name:"",
      questions:[]
    }
  },
  resolvers: {
    Mutation: {
      addSelectedVoterId: updateSelectedVoterId(
        (selectedVoterIds, voterId) => selectedVoterIds.concat(voterId)
      ),
      removeSelectedVoterId: updateSelectedVoterId(
        (selectedVoterIds, voterId) => selectedVoterIds.filter(vId => vId !== voterId)
      ),
      setSelectedBallot: (_,{selectedBallot},{cache})=>{
        const SET_SELECTED_BALLOT = gql`
					query{
						selectedBallot
					}
				`;
        const data = cache.readQuery({query: SET_SELECTED_BALLOT});
        console.log("selectedBallot",selectedBallot);
        data.selectedBallot=selectedBallot;
        cache.writeQuery({query:SET_SELECTED_BALLOT,data});
      },
    },
  },
});

const httpLink = new HttpLink({
  uri: `http://localhost:${GRAPHQL_PORT}/graphql`,
});

const webSocketLink = new WebSocketLink({
  uri: `ws://localhost:${GRAPHQL_PORT}/graphql`,
});

const link = split(
  ({ query }) => {
    const { operation, kind } = getMainDefinition(query);
    const result = (kind === 'OperationDefinition')
      && (operation === 'subscription');
    return result;
  },
  webSocketLink,
  ApolloLink.from([clientStateLink, httpLink]),
);

const client = new ApolloClient({
  cache, link, connectToDevTools: true,
});

ReactDOM.render(
  <React.Fragment>
  <BrowserRouter>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider></BrowserRouter></React.Fragment>,
  document.querySelector('#root'),
);
