import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import Radio from './Radio';

describe('test', () => {
  it('Should Render Radio Compoents', () => {
    render(<Radio label="Radio Item" />);
  });

  it('Should match Snapshot of Radio', () => {
    const tree = renderer.create(<Radio label="Radio Item" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render correct label', () => {
    render(<Radio label="Radio Item" />);
    expect(screen.getByText('Radio Item')).toBeTruthy();
  });

  it('Should be checked if checked flag is true', () => {
    render(<Radio label="Radio Item" checked />);
    expect(screen.getByRole('radio').checked).toBe(true);
  });

  it('Should be disabled if disabled flag is true', () => {
    render(<Radio label="Radio Item" disabled checked />);
    expect(screen.getByText('Radio Item').classList.contains('Mui-disabled')).toBe(true);
  });
});
