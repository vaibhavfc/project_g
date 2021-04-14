import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';

import Header from './Header';

beforeEach(cleanup);

describe('Header', () => {
  it('Should render medium header', () => {
    render(<Header size="medium" />);
    expect(screen.getByTestId('header-medium')).toBeVisible();
  });

  it('Should render large header', () => {
    render(<Header size="large" />);
    expect(screen.getByTestId('header-large')).toBeVisible();
  });
});
