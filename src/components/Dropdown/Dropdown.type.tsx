// import { Ref } from 'react';
import { FilledTextFieldProps as MuiTextFieldProps, TextFieldClassKey } from '@material-ui/core/TextField';

export interface DropdownStylingProps extends Partial<Record<TextFieldClassKey, string>> {
  /**
   * override root(button itself) when done is true
   */
}

export interface DropdownProps extends MuiTextFieldProps {
  /**
   * overriden BaseProps innerRef to HTMLButtonElement
   */
  // innerRef: Ref<HTMLInputElement>;
}
