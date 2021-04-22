import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';

import Card from './Card';

beforeEach(cleanup);

describe('Card', () => {
  it('Renders Default Card', () => {
    render(<Card />);
    expect(screen.getByTestId('card-main')).toBeVisible();
  });
});
