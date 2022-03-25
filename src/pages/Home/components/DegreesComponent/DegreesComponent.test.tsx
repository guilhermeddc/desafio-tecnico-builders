import {render} from '@testing-library/react';

import {DegreesComponent} from '.';

describe('DegreesComponent', () => {
  it('should render correctly', () => {
    const {container} = render(<DegreesComponent />);

    expect(container).toMatchSnapshot();
  });
});
