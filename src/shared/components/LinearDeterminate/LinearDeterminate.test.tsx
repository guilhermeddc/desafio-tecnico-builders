import {render, screen} from '@testing-library/react';

import {LinearDeterminate} from '.';

describe('LinearDeterminate Component', () => {
  test('Title and subtitle', () => {
    render(<LinearDeterminate />);

    expect(
      screen.getByRole('heading', {name: /☀️ desafio técnico/i}),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {name: /builders/i}),
    ).toBeInTheDocument();
  });
});
