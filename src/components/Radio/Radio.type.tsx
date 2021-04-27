import { Ref } from 'react';
import { RadioProps as MuiRadioProps, RadioClassKey } from '@material-ui/core/Radio';

export interface RadioStylingProps extends Partial<Record<RadioClassKey, string>> {
}

export interface RadioProps extends MuiRadioProps {
  innerRef: Ref<HTMLButtonElement>;
  label?: string;
  value: any;
}
