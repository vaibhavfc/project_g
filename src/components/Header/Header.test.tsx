import { render } from '@testing-library/react';

import renderer from 'react-test-renderer';

import Header from './Header';

describe('test', () => {
  it('Renders Header Compoents', () => {
    render(<Header>test</Header>);
  });

  it('Matches Snapshot of Header', () => {
    const tree = renderer.create(<Header> TEST</Header>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
