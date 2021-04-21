// import { Ref } from 'react';
import { FilledTextFieldProps as MuiDropdownProps, TextFieldClassKey } from '@material-ui/core/TextField';

export interface DropdownStylingProps extends Partial<Record<TextFieldClassKey, string>> {
  /**
   * override root(button itself) when done is true
   */
  item?: string;
  paperRoot?: string;
  rippleClasses?: string;
}

export interface DropdownProps extends MuiDropdownProps {
  /**
   * overriden BaseProps innerRef to HTMLButtonElement
   */
  // innerRef: Ref<HTMLInputElement>;
  items: any[];
}
