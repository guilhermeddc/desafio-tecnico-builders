import {render, screen} from '@testing-library/react';
import {convertFahrenheitToCelsius} from 'shared/utils/convertFahrenheitToCelsius';

import {DegreesComponent} from '.';

describe('DegreesComponent', () => {
  it('should render correctly', () => {
    const {container} = render(<DegreesComponent />);

    expect(container).toMatchSnapshot();
  });

  it('should render with default props to type is equal success', () => {
    render(<DegreesComponent temp={250} />);

    expect(
      screen.getByText(`${convertFahrenheitToCelsius(250)}˚C`),
    ).toBeInTheDocument();
  });
});
