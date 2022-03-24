import {render} from '@testing-library/react';

import {InfoComponent} from '.';

describe('InfoComponent', () => {
  it('should render correctly', () => {
    const {container} = render(<InfoComponent speed={12} humidity={50} />);

    expect(container).toMatchSnapshot();
  });
});
