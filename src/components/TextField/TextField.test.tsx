import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';
import React from 'react';
import { InfoOutlined } from '@material-ui/icons';
import TextField from './TextField';

beforeEach(cleanup);

describe('TextField', () => {
  it('Should render default switch', () => {
    render(<TextField {...{
      label: 'Label',
      error: false,
      variant: 'filled',
      type: 'text',
      placeholder: 'Placeholder text',
      helperText: 'Helper Text',
    }}
    />);
  });
  it('Should render correct label', () => {
    render(<TextField {...{
      label: 'Label',
      error: false,
      variant: 'filled',
      type: 'text',
      placeholder: 'Placeholder text',
      helperText: 'Helper Text',
    }}
    />);
    expect(screen.getByText('Label').classList.contains('labelRoot')).toBe(true);
  });
  it('Should render correct placeholder', () => {
    render(<TextField {...{
      label: 'Label',
      error: false,
      variant: 'filled',
      type: 'text',
      placeholder: 'Placeholder text',
      helperText: 'Helper Text',
    }}
    />);
    expect(screen.getByPlaceholderText('Placeholder text')).toBeVisible();
  });
  it('Should render trailing icon', () => {
    render(<TextField {...{
      label: 'Label',
      error: false,
      variant: 'filled',
      placeholder: 'Placeholder text',
      type: 'text',
      adornmentEnd: <InfoOutlined />,
    }}
    />);
    // TODO vaibahv
  });
  it('Should render helper text', () => {
    render(<TextField {...{
      label: 'Label',
      error: false,
      variant: 'filled',
      type: 'text',
      placeholder: 'Placeholder text',
      helperText: 'Helper Text',
    }}
    />);
    expect(screen.getByText('Helper Text').classList.contains('MuiFormHelperText-contained')).toBe(true);
  });
  it('Should render prefix', () => {
    render(<TextField {...{
      label: 'Label',
      error: false,
      variant: 'filled',
      type: 'text',
      placeholder: 'Placeholder text',
      helperText: 'Helper Text',
      adornmentStart: '₹',
    }}
    />);
    fireEvent.click(screen.getByPlaceholderText('Placeholder text'));
    expect(screen.getByText('₹')).toBeVisible();
  });
  it('Should render suffix', () => {
    render(<TextField {...{
      label: 'Label',
      error: false,
      variant: 'filled',
      type: 'text',
      placeholder: 'Placeholder text',
      helperText: 'Helper Text',
      adornmentSuffix: 'years',
    }}
    />);
    fireEvent.click(screen.getByPlaceholderText('Placeholder text'));
    expect(screen.getByText('years')).toBeVisible();
  });
  it('Should be disabled on disable', () => {
    const onChange = jest.fn();
    render(<TextField {...{
      label: 'Label',
      error: false,
      variant: 'filled',
      type: 'text',
      placeholder: 'Placeholder text',
      helperText: 'Helper Text',
      disabled: false,
      onChange,
    }}
    />);
    fireEvent.click(screen.getByPlaceholderText('Placeholder text'));
    expect(onChange).not.toHaveBeenCalled();
  });
  it('Should work with onFocus', () => {
    render(<TextField {...{
      label: 'Label',
      variant: 'filled',
      type: 'text',
      placeholder: 'Placeholder text',
      helperText: 'Helper Text',
      disabled: false,
      error: true,
    }}
    />);
    screen.getByPlaceholderText('Placeholder text').focus();
    expect(screen.getByText('Label').classList.contains('labelRootError')).toBe(true);
  });
  it('Should work with onChange', () => {
    render(<TextField {...{
      label: 'Label',
      variant: 'filled',
      type: 'text',
      placeholder: 'Placeholder text',
      helperText: 'Helper Text',
      disabled: false,
      error: true,
    }}
    />);
    const inputBox = screen.getByPlaceholderText('Placeholder text');
    fireEvent.change(inputBox, { target: { value: 'test' } });
    expect(inputBox.getAttribute('value')).toBe('test');
  });
});
