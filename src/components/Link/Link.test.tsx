import { render } from '@testing-library/react';

import renderer from 'react-test-renderer';

import Link from './Link';

describe('test', () => {
  it('Renders Link Compoents', () => {
    render(<Link>test</Link>);
  });

  it('Matches Snapshot of Link', () => {
    const tree = renderer.create(<Link> TEST</Link>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
