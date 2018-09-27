import { compose } from 'react-apollo';

import { App } from '../components';
import { MESSAGE_QUERY, withMessageQuery } from '../enhancers';

export const Queries = {
  MESSAGE_QUERY
};

export const AppContainer = compose(withMessageQuery)(App);


