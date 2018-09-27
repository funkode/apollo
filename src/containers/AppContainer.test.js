import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { mount } from 'enzyme';
import wait from 'waait';

import { AppContainer, Queries } from './AppContainer';

describe('<AppContainer />', () => {

  test('renders', async () => {

    const message = 'Test Message';

    const messageQueryMock = {
      request: { query: Queries.MESSAGE_QUERY },
      result: { data: { message } }
    };

    const component = mount(
      <MockedProvider mocks={[ messageQueryMock ]} addTypename={false}>
        <AppContainer />
      </MockedProvider>
    );

    expect(component.find('h1').text()).toBe('');

    await wait(0);

    expect(component.find('h1').text()).toBe(message);

  });

});

