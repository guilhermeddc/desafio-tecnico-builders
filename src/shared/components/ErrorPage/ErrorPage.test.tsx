import {render, screen} from '@testing-library/react';

import {ErrorPage} from '.';

describe('ErrorPage Component', () => {
  it('message', async () => {
    render(<ErrorPage message="Erro ao carregar dados da API" />);

    expect(
      screen.getByText('Erro ao carregar dados da API'),
    ).toBeInTheDocument();
  });
});
