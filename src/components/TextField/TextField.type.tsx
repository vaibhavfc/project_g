import { Ref } from 'react';
import { TextFieldProps as MuiTextFieldProps, TextFieldClassKey } from '@material-ui/core/TextField';

export interface TextFieldStylingProps extends Partial<Record<TextFieldClassKey, string>> {
    /**
     * override root(button itself) when done is true
     */
    doneRoot?: string;

  }

export interface TextFieldProps extends MuiTextFieldProps {
    /**
     * overriden BaseProps innerRef to HTMLButtonElement
     */
    innerRef: Ref<HTMLInputElement>;
  }
