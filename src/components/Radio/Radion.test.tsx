import { render } from '@testing-library/react';

import renderer from 'react-test-renderer';

import Radio from './Radio';

describe('test', () => {
  it('Renders Radio Compoents', () => {
    render(<Radio>test</Radio>);
  });

  it('Matches Snapshot of Radio', () => {
    const tree = renderer.create(<Radio> TEST</Radio>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
