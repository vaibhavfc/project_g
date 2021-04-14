import {
  render, screen, cleanup, within,
} from '@testing-library/react';
import React from 'react';

import Breadcrumbs from './Breadcrumbs';

beforeEach(cleanup);

const dummyProps = {
  maxItems: 4,
  links: [
    { href: '/test1', linkText: 'Link1', active: false },
    { href: '#', linkText: 'Link', active: false },
    { href: '#', linkText: 'Link', active: false },
    { href: '#', linkText: 'Link', active: false },
    { href: '#', linkText: 'Link', active: false },
    { href: '/1', linkText: 'Current Page', active: true }],
};
beforeEach(cleanup);

describe('Breadcrumbs', () => {
  it('Should render default lists', () => {
    render(<Breadcrumbs />);
  });

  it('Should render lists', () => {
    render(<Breadcrumbs maxItems={dummyProps.maxItems} links={dummyProps.links} />);
    const list = screen.getByRole('list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(4);
  });

  it('Should be able to click on links', () => {
    render(<Breadcrumbs maxItems={dummyProps.maxItems} links={dummyProps.links} />);
    expect(screen.getByText('Link1').closest('a')).toHaveAttribute('href', '/test1');
  });
  it('Should be able show ... in if more links', () => {
    render(<Breadcrumbs maxItems={dummyProps.maxItems} links={dummyProps.links} />);
    expect(screen.getByRole('button').className).toMatch(/PrivateBreadcrumbCollapsed/);
  });
  it('Should show current link on last link', () => {
    render(<Breadcrumbs maxItems={dummyProps.maxItems} links={dummyProps.links} />);
    expect(screen.getByText('Current Page').className).toMatch(/active/);
  });
});
