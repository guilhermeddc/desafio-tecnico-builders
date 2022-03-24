import {render, screen} from '@testing-library/react';

import {LinearDeterminate} from '.';

describe('LinearDeterminate Component', () => {
  test('Title and subtitle', () => {
    render(<LinearDeterminate />);

    const title = screen.getByText('☀️ Desafio Técnico');
    const subtitle = screen.getByText('Builders');

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });
});
