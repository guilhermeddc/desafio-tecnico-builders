import {MemoryRouter} from 'react-router-dom';

import {render} from '@testing-library/react';

import {PrivateRoutes} from './private.routes';

describe('PrivateRoutes', () => {
  it('should render the PrivateRoutes component and redirect to home', () => {
    const {container} = render(
      <MemoryRouter initialEntries={['/test']} initialIndex={0}>
        <PrivateRoutes />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
