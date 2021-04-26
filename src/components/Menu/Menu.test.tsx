import {
  render, screen, cleanup,
} from '@testing-library/react';
import React from 'react';

import Menu from './Menu';

beforeEach(cleanup);

describe('Menu', () => {
  it('Should render default switch', () => {
    render(<Menu items={[
      {
        title: 'Menu Item 1',
        value: 1,
      },
      {
        title: 'Menu Item 2',
        value: 2,
      },
      {
        title: 'Menu Item 3',
        value: 3,
      },
    ]}
    />);
    const items = screen.getAllByRole('menuitem');
    expect(items.length).toBe(3);
  });
  it('Should render menu items', () => {
    render(<Menu items={[
      {
        title: 'Menu Item 1',
        value: 1,
      },
      {
        title: 'Menu Item 2',
        value: 2,
      },
      {
        title: 'Menu Item 3',
        value: 3,
      },
    ]}
    />);
    expect(screen.getByText('Menu Item 1')).toBeVisible();
    expect(screen.getByText('Menu Item 3')).toBeVisible();
  });
});
