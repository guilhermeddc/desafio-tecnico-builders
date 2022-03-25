import {render} from '@testing-library/react';

import {DescriptionComponent} from '.';

describe('DescriptionComponent', () => {
  it('should render correctly', () => {
    const {container} = render(
      <DescriptionComponent description="Nuvens Dispersas" />,
    );

    expect(container.innerHTML).toMatch('Nuvens Dispersas');
  });
});
