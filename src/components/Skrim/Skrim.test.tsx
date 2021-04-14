import { render, cleanup } from '@testing-library/react';
import React from 'react';

import Skrim from './Skrim';

beforeEach(cleanup);

describe('test', () => {
  it('Renders Skrim correctly', () => {
    const { getByTestId } = render(<Skrim type="modal1" />);
    expect(getByTestId('skrim-modal1').classList.contains('MuiTypography-root')).toBe(true);
  });
  it('Renders Skrim correctly for nonModal', () => {
    const { getByTestId } = render(<Skrim type="nonModal" />);
    expect(getByTestId('skrim-nonModal').classList.contains('MuiTypography-root')).toBe(true);
  });
});
