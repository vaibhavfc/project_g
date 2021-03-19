import { render } from '@testing-library/react';

import renderer from 'react-test-renderer';

import Divider from './Divider';

describe('test', () => {
  it('Renders Divider Compoents', () => {
    render(<Divider>test</Divider>);
  });

  it('Matches Snapshot of Divider', () => {
    const tree = renderer.create(<Divider> TEST</Divider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
