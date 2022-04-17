import React from 'react';

import {render} from '@testing-library/react';

import {AlertComponent} from '.';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('shared/hooks', () => ({
  useCart: () => {
    return {
      cartQuantity: 0,
    };
  },
}));

describe('AlertComponent', () => {
  it('should render', () => {
    const {container} = render(<AlertComponent />);

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render with default props to type is equal success', () => {
    const setState = jest.fn();
    const useStateMock: any = () => [
      {
        type: 'success',
        isOpen: false,
        message: 'Success Message',
      },
      setState,
    ];

    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    const {container} = render(<AlertComponent />);
    expect(container).toBeInTheDocument();
  });

  it('should render with custom props to type is equal undefined', () => {
    const setState = jest.fn();
    const useStateMock: any = () => [
      {
        type: undefined,
        isOpen: false,
        message: 'Success Message',
      },
      setState,
    ];

    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    const {container} = render(<AlertComponent />);
    expect(container).toBeInTheDocument();
  });
});
