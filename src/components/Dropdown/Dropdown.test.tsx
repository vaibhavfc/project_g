import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';
import React from 'react';

import Dropdown from './Dropdown';

beforeEach(cleanup);

describe('Dropdown', () => {
  it('Renders Default Dropdown', () => {
    render(<Dropdown {...{
      variant: 'filled',
      label: 'Label',
      error: false,
      placeholder: 'Placeholder text',
      type: 'text',
      items: [
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
      ],
    }}
    />);
    expect(screen.getByTestId('dropdown-main')).toBeVisible();
  });
  it('Renders correct label', () => {
    render(<Dropdown {...{
      variant: 'filled',
      label: 'Label',
      error: false,
      placeholder: 'Placeholder text',
      type: 'text',
      items: [
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
      ],
    }}
    />);
    expect(screen.getByText('Label')).toBeVisible();
  });
  it('Renders correct placeholder', () => {
    render(<Dropdown {...{
      variant: 'filled',
      label: 'Label',
      error: false,
      placeholder: 'Placeholder text',
      type: 'text',
      items: [
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
      ],
    }}
    />);
    expect(screen.getByPlaceholderText('Placeholder text')).toBeVisible();
  });
  it('Renders correct onclick behaviour', () => {
    render(<Dropdown {...{
      variant: 'filled',
      label: 'Label',
      error: false,
      placeholder: 'Placeholder text',
      type: 'text',
      items: [
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
      ],
    }}
    />);
    fireEvent.click(screen.getByPlaceholderText('Placeholder text'));
    expect(screen.getByText('Menu Item 1')).toBeVisible();
  });
  it('Renders correct menu item', () => {
    render(<Dropdown {...{
      variant: 'filled',
      label: 'Label',
      error: false,
      placeholder: 'Placeholder text',
      type: 'text',
      items: [
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
      ],
    }}
    />);
    fireEvent.click(screen.getByPlaceholderText('Placeholder text'));
    fireEvent.click(screen.getByText('Menu Item 1'));
  });
  it('Should work with onChange', () => {
    render(<Dropdown {...{
      variant: 'filled',
      label: 'Label',
      error: false,
      placeholder: 'Placeholder text',
      type: 'text',
      items: [
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
      ],
    }}
    />);
    const inputBox = screen.getByPlaceholderText('Placeholder text');
    fireEvent.change(inputBox, { target: { value: 'test' } });
    expect(inputBox.getAttribute('value')).toBe('test');
  });
  it('Should work with error', () => {
    render(<Dropdown {...{
      variant: 'filled',
      label: 'Label',
      error: true,
      placeholder: 'Placeholder text',
      type: 'text',
      items: [
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
      ],
    }}
    />);
    screen.getByPlaceholderText('Placeholder text').focus();
    expect(screen.getByText('Label').classList.contains('labelRootError')).toBe(true);
  });
});
