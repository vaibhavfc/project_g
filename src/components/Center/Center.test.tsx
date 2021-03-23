import { render } from '@testing-library/react';

import renderer from 'react-test-renderer';

import Center from './Center';

describe('test', () => {
  it('Renders Center Compoents', () => {
    render(<Center>test</Center>);
  });

  it('Matches Snapshot of Center', () => {
    const tree = renderer.create(<Center> TEST</Center>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
