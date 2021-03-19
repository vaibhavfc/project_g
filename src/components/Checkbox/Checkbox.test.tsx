import { render } from '@testing-library/react';

import renderer from 'react-test-renderer';

import Checkbox from './Checkbox';

describe('test', () => {
  it('Renders Checkbox Compoents', () => {
    render(<Checkbox>test</Checkbox>);
  });

  it('Matches Snapshot of Checkbox', () => {
    const tree = renderer.create(<Checkbox> TEST</Checkbox>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
