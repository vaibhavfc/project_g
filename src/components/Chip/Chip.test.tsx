import { render } from '@testing-library/react';

import renderer from 'react-test-renderer';

import Chip from './Chip';

describe('Chip', () => {
  it('Renders Chip Compoents', () => {
    render(<Chip type="default" chipType="status" />);
  });

  it('Matches Snapshot of Chip', () => {
    const tree = renderer.create(<Chip type="default" chipType="status" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  /* it('Should render correct label', () => {
    const { debug } = render(<Chip type="pending" label="Chip" />);
    // expect(screen.getByText('Checkbox Item')).toBeTruthy();
    debug();
  });

  it('Should render label', () => {
    render(<Chip type="pending" label="Chip" />);
    expect(screen.getByText('Chip')).toBeTruthy();
  });

  it('Should render small', () => {
    render(<Chip type="pending" label="Chip" />);
    expect(screen.getByText('Chip')).toBeTruthy();
  }); */
});
