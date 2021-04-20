// import { Ref } from 'react';
import {
  FilledTextFieldProps as MuiDatepickerProps,
  TextFieldClassKey as MuiTextFieldClassKey,
} from '@material-ui/core/TextField';
// import { MuiPickersComponentsToClassName } from '@material-ui/pickers/src/typings/overrides';

export interface DatepickerStylingProps extends Partial<Record<MuiTextFieldClassKey, string>> {
  root: string;
  MuiPickersModal?: string;
}

export interface DatepickerProps extends MuiDatepickerProps {
  // innerRef: Ref<HTMLDivElement>;
  doneCallback?: () => void;
  adornmentStart?: any;
  adornmentEnd?: any ;
  adornmentSuffix?: any
}
