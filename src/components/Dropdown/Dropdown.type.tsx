// import { Ref } from 'react';
import { FilledTextFieldProps as MuiDropdownProps, TextFieldClassKey } from '@material-ui/core/TextField';

export interface DropdownStylingProps extends Partial<Record<TextFieldClassKey, string>> {
  /**
   * override root(button itself) when done is true
   */
}

export interface DropdownProps extends MuiDropdownProps {
  /**
   * overriden BaseProps innerRef to HTMLButtonElement
   */
  // innerRef: Ref<HTMLInputElement>;
  items: Array<{title: string, value: any}>;
}
