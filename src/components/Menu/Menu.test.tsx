import { render } from '@testing-library/react';

import renderer from 'react-test-renderer';

import Menu from './Menu';

describe('Menu', () => {
  it('Renders Menu Compoents', () => {
    render(<Menu items={['Menu Item 1', 'Menu Item 2', 'Menu Item 3']} />);
  });

  it('Matches Snapshot of Menu', () => {
    const tree = renderer.create(<Menu items={['Menu Item 1', 'Menu Item 2', 'Menu Item 3']} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
