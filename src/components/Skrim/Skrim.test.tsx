import { render } from '@testing-library/react';

import renderer from 'react-test-renderer';

import Skrim from './Skrim';

describe('test', () => {
  it('Renders Skrim Compoents', () => {
    render(<Skrim>test</Skrim>);
  });

  it('Matches Snapshot of Skrim', () => {
    const tree = renderer.create(<Skrim> TEST</Skrim>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
