import {
  render, cleanup,
} from '@testing-library/react';
import React from 'react';

import StepItem from './StepItem';

beforeEach(cleanup);

describe('StepItem', () => {
  it('Should render', () => {
    render(<StepItem />);
  });
  it('Should render current', () => {
    render(<StepItem stepStatus="current" />);
  });
  it('Should render success', () => {
    render(<StepItem stepStatus="success" />);
  });
  it('Should render pending', () => {
    render(<StepItem stepStatus="pending" />);
  });
});
