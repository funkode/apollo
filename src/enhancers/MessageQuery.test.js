import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { mount } from 'enzyme';
import wait from 'waait';

import { MESSAGE_QUERY, withMessageQuery } from './MessageQuery';

describe('withMessageQuery', () => {

  test('Queries and Transforms Props', async () => {

    const message = 'Test Message';

    const messageQueryMock = {
      request: { query: MESSAGE_QUERY },
      result: { data: { message } }
    };

    const Container = withMessageQuery( ({ message }) => <div>{message}</div> );

    const component = mount(
      <MockedProvider mocks={[ messageQueryMock ]} addTypename={false}>
        <Container />
      </MockedProvider>
    );

    expect(component.find('div').text()).toBe('');

    await wait(0);

    expect(component.find('div').text()).toBe(message);

  });

});

