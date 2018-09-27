import React from 'react';
import { VOTERS_QUERY } from '../queries/voter/VotersQuery';
import { VoterTableContainer } from './voter/VoterTableContainer'





export const App = () =>
  <React.Fragment>
    <VoterTableContainer refetchQueries={[{ query: VOTERS_QUERY }]}/>
  </React.Fragment>;
