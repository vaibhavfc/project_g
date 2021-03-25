import { render, screen } from '@testing-library/react';
import React from 'react';

import renderer from 'react-test-renderer';

import Button from './Button';

describe('Button', () => {
  it('Renders Button Compoents', () => {
    render(<Button hasIconOnly>test</Button>);
  });

  it('Matches Snapshot of Button', () => {
    const tree = renderer.create(<Button> TEST</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correct label', () => {
    render(<Button>Primary button</Button>);
    expect(screen.getByRole('button').textContent).toBe('Primary button');
  });
});

describe('Primary Button', () => {
  it('Should render primary button', () => {
    render(<Button>Primary button</Button>);
    expect(screen.getByRole('button').classList.contains('MuiButton-outlinedPrimary')).toBe(true);
  });
});

describe('Secondary Button', () => {
  it('Should render secondary button', () => {
    render(<Button color="secondary">Secondary button</Button>);
    expect(screen.getByRole('button').classList.contains('MuiButton-outlinedSecondary')).toBe(true);
  });
});

describe('Flushed Button', () => {
  it('Should render flusehd button', () => {
    render(<Button isFlushButton>Secondary button</Button>);
    expect(screen.getByRole('button').classList.contains('MuiButton-root')).toBe(true);
  });
});

describe('Icon Button', () => {
  it('Should render flusehd button', () => {
    // TODO vaibhav
    // render(<Button withIcon>Icon button</Button>);
    // expect(screen.getByRole('button').getElementsByClassName('MuiButton-endIcon')).toBe(true);
  });
});

describe('Icon Only Button', () => {
  it('Should render flusehd button', () => {
    // TODO vaibhav
    // render(<Button hasIconOnly>Icon button</Button>);
    // expect(screen.getByRole('button').getElementsByClassName('MuiButton-root')).toBe(true);
  });
});

describe('Button sizes', () => {
  it('Should render large button', () => {
    render(<Button size="large">Large button</Button>);
    expect(screen.getByRole('button').classList.contains('MuiButton-sizeLarge')).toBe(true);
  });

  it('Should render small button', () => {
    render(<Button size="small">Large button</Button>);
    expect(screen.getByRole('button').classList.contains('MuiButton-sizeSmall')).toBe(true);
  });
});

describe('Disabled Button', () => {
  it('Should render flusehd button', () => {
    render(<Button disabled>Disabled button</Button>);
    expect(screen.getByRole('button').classList.contains('Mui-disabled')).toBe(true);
  });
});
