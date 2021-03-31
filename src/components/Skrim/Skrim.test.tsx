import { render } from '@testing-library/react';

import renderer from 'react-test-renderer';

import Skrim from './Skrim';

describe('test', () => {
  it('Renders Skrim Compoents', () => {
    render(<Skrim type="modal1" />);
  });

  it('Matches Snapshot of Skrim', () => {
    const tree = renderer.create(<Skrim type="modal1" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
