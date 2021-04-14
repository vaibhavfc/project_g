import {
  render, cleanup,
} from '@testing-library/react';
import React from 'react';

import ProgressIndicator from './ProgressIndicator';

beforeEach(cleanup);

describe('ProgressIndicator', () => {
  it('Should render type error', () => {
    render(<ProgressIndicator {...{
      type: 'success',
      progressIndicatorType: 'step',
      value: 770,
    }}
    />);
  });
});
