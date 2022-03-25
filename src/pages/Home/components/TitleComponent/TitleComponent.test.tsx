import {render} from '@testing-library/react';

import {TitleComponent} from '.';

describe('TitleComponent', () => {
  it('should render correctly', () => {
    const {container} = render(
      <TitleComponent
        locality="Nossa Senhora do Rosário, Santa Maria"
        state="Rio Grande do Sul"
        country="BR"
      />,
    );

    expect(container.innerHTML).toMatch(
      'Nossa Senhora do Rosário, Santa Maria, Rio Grande do Sul/BR',
    );
  });
});
