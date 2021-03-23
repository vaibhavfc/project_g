import { Ref } from 'react';
import { DividerProps as MuiDividerProps, DividerClassKey } from '@material-ui/core/Divider';

export interface DividerStylingProps extends Partial<Record<DividerClassKey, string>> {
}

export interface DividerProps extends MuiDividerProps {
  innerRef: Ref<HTMLHRElement>
  size: 'small' | 'large';
}
