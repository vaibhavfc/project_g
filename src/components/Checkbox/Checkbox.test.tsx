import { render, screen } from '@testing-library/react';

import Checkbox from './Checkbox';

describe('test', () => {
  it('Should Render Checkbox Compoents', () => {
    render(<Checkbox label="Checkbox Item" />);
  });

  it('Should render correct label', () => {
    render(<Checkbox label="Checkbox Item" />);
    expect(screen.getByText('Checkbox Item')).toBeTruthy();
  });

  it('Should be checked if checked flag is true', () => {
    render(<Checkbox label="Checkbox Item" checked />);
    const chk = screen.getByRole('checkbox');
    expect(chk.hasAttribute('checked')).toBe(true);
  });

  it('Should be disabled if disabled flag is true', () => {
    render(<Checkbox label="Checkbox Item" disabled checked />);
    expect(screen.getByText('Checkbox Item').classList.contains('Mui-disabled')).toBe(true);
  });
});
