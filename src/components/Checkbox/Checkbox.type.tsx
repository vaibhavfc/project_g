import { Ref } from 'react';
import { CheckboxProps as MuiCheckboxProps, CheckboxClassKey } from '@material-ui/core/Checkbox';

export interface CheckboxStylingProps extends Partial<Record<CheckboxClassKey, string>> {
}

export interface CheckboxProps extends MuiCheckboxProps {
  innerRef: Ref<HTMLButtonElement>;
  label?: string;
  list?: {title: string, }
}
