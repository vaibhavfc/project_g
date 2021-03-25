import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import Divider from './Divider';

describe('test', () => {
  it('Renders Divider Compoents', () => {
    render(<Divider />);
  });

  it('Matches Snapshot of Divider', () => {
    const tree = renderer.create(<Divider />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Renders vertical', () => {
    it('Should render large devider', () => {
      render(<Divider orientation="vertical" size="large" />);
      expect(screen.getByRole('devider').classList.contains('largeVertical')).toBe(true);
    });

    it('Should render small devider', () => {
      render(<Divider orientation="vertical" size="small" />);
      expect(screen.getByRole('devider').classList.contains('smallVertical')).toBe(true);
    });
    it('Should render horizontal devider', () => {
      render(<Divider />);
      expect(screen.getByRole('devider').classList.contains('MuiDivider-vertical')).toBe(false);
    });
    it('Should render vertical devider', () => {
      render(<Divider orientation="vertical" />);
      expect(screen.getByRole('devider').classList.contains('MuiDivider-vertical')).toBe(true);
    });
  });
});
