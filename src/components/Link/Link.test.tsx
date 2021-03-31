import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import Link from './Link';

describe('test', () => {
  it('Matches Snapshot of Link', () => {
    const tree = renderer.create(<Link to="/home"> to workd </Link>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have correct href', () => {
    render(<Link to="/home"> to workd </Link>);
    expect(screen.getByRole('link').hasAttribute('href')).toBe('http://localhost/home');
  });

  it('should have child content', () => {
    render(<Link to="/home">Primary Link</Link>);
    expect(screen.getByRole('link').textContent).toBe('Primary Link');
  });

  it('should be disabled when disabled is passed', () => {
    render(<Link to="/home" disabled>Primary Link</Link>);
    expect(screen.getByRole('link').classList.contains('disabled')).toBe(true);
  });
});
