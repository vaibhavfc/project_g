import { render } from '@testing-library/react';

import renderer from 'react-test-renderer';

import DigitalInput from './DigitalInput';

describe('DigitalInput', () => {
  it('Renders DigitalInput Compoents', () => {
    render(<DigitalInput size="medium" length={6} />);
  });

  it('Matches Snapshot of DigitalInput', () => {
    const tree = renderer.create(<DigitalInput size="medium" length={6} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
