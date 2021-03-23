import { render } from '@testing-library/react';

import renderer from 'react-test-renderer';

import Button from './Button';

describe('test', () => {
  it('Renders Button Compoents', () => {
    render(<Button>test</Button>);
  });

  it('Matches Snapshot of Button', () => {
    const tree = renderer.create(<Button> TEST</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
