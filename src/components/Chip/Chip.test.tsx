import { render } from '@testing-library/react';

import renderer from 'react-test-renderer';

import Chip from './Chip';

describe('test', () => {
  it('Renders Chip Compoents', () => {
    render(<Chip>test</Chip>);
  });

  it('Matches Snapshot of Chip', () => {
    const tree = renderer.create(<Chip> TEST</Chip>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
