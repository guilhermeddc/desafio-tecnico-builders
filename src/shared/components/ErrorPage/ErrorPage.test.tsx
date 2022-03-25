import {render, screen} from '@testing-library/react';

import {ErrorPage} from '.';

describe('ErrorPage Component', () => {
  test('message', async () => {
    render(<ErrorPage message="Erro ao carregar dados da API" />);

    const message = screen.getByText('Erro ao carregar dados da API');

    expect(message).toBeInTheDocument();
  });
});
