import { render, screen } from '@testing-library/react';

import Link from './Link';

describe('test', () => {
  it('should have correct href', () => {
    render(<Link to="/home"> to workd </Link>);
    expect(screen.getByRole('link').href).toBe('http://localhost/home');
  });

  it('should have child content', () => {
    render(<Link to="/home">Primary Link</Link>);
    expect(screen.getByRole('link').textContent).toBe('Primary Link');
  });

  it('should be disabled when disabled is passed', () => {
    render(<Link to="/home" disabled>Primary Link</Link>);
    expect(screen.getByRole('link').classList.contains('disabled')).toBe(true);
  });

  it('should render inline link', () => {
    render(<Link to="/home" disabled>Primary Link</Link>);
    expect(screen.getByRole('link').classList.contains('disabled')).toBe(true);
  });

  it('should render with default props', () => {
    render(<Link>Primary Link</Link>);
    expect(screen.getByRole('link').href).toBe('http://localhost/');
  });
});
