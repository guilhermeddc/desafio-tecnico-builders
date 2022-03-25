import {render} from '@testing-library/react';
import {convertMilesToKilometers} from 'shared/utils/convertMilesToKilometers';

import {InfoComponent} from '.';

describe('InfoComponent', () => {
  it('should render correctly', () => {
    const {container} = render(<InfoComponent speed={12} humidity={50} />);

    expect(container.innerHTML).toMatch(convertMilesToKilometers(12));
  });
});
