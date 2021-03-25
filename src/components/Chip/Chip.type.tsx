import { Ref } from 'react';
import { ChipProps as MuiChipProps, ChipClassKey } from '@material-ui/core/Chip';

export interface ChipStylingProps extends Partial<Record<ChipClassKey, string>> {
  rootStatus?: string
  rootNudge?: string
}

export interface ChipProps extends MuiChipProps {
  innerRef: Ref<HTMLDivElement>;
  type: 'default' | 'success' | 'pending' | 'warning' | 'info';
  as: 'status' | 'nudge';
  doneCallback?: () => void;
}
