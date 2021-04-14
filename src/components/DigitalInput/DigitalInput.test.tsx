import {
  render, cleanup,
} from '@testing-library/react';
import React from 'react';

import DigitalInput from './DigitalInput';

beforeEach(cleanup);

describe('DigitalInput', () => {
  it('Should render default switch', () => {
    render(<DigitalInput />);
  });
});
