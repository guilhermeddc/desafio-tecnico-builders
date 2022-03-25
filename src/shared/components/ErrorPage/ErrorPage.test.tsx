import {render, screen} from '@testing-library/react';

import {ErrorPage} from '.';

describe('ErrorPage Component', () => {
  test('message', async () => {
    render(<ErrorPage message="Method not implemented." />);

    const message = screen.getByText('Error: Method not implemented.');

    expect(message).toBeInTheDocument();
  });
});
