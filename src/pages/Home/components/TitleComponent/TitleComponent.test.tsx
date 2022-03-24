import {render} from '@testing-library/react';

import {TitleComponent} from '.';

describe('TitleComponent', () => {
  it('should render correctly', () => {
    const {container} = render(
      <TitleComponent name="São Paulo" country="BR" />,
    );

    expect(container).toMatchSnapshot();
  });
});
