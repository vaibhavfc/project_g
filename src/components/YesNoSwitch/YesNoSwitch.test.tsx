import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';
import React from 'react';

import YesNoSwitch from './YesNoSwitch';

beforeEach(cleanup);

describe('YesNoSwitch', () => {
  it('Should render default switch', () => {
    render(<YesNoSwitch />);
    expect(screen.getByTestId('yesnoswitch-true').classList.contains('Mui-selected')).toBe(true);
  });

  it('Should render default with no', () => {
    render(<YesNoSwitch defaultValue={false} />);
    expect(screen.getByTestId('yesnoswitch-false').classList.contains('Mui-selected')).toBe(true);
  });

  it('Should render select other on click YesNoSwitch', () => {
    render(<YesNoSwitch />);
    fireEvent.click(screen.getByTestId('yesnoswitch-false'));
    expect(screen.getByTestId('yesnoswitch-false').classList.contains('Mui-selected')).toBe(true);
    fireEvent.click(screen.getByTestId('yesnoswitch-true'));
    expect(screen.getByTestId('yesnoswitch-true').classList.contains('Mui-selected')).toBe(true);
  });
  it('Should render disabled', () => {
    render(<YesNoSwitch disabled />);
    // TODO VAIBHAV
    expect(screen.getByTestId('yesnoswitch-main').className).toMatch(/undefined/);
  });
});
