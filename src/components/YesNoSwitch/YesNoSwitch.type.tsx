/* eslint-disable max-len */
// import { Ref } from 'react';
import { ToggleButtonGroupProps as MuiToggleButtonGroupProps, ToggleButtonGroupClassKey } from '@material-ui/lab/ToggleButtonGroup';

// import { ToggleButtonProps as MuiToggleButtonProps, ToggleButtonClassKey } from '@material-ui/lab/ToggleButton'

export interface YesNoSwitchStylingProps extends Partial<Record<ToggleButtonGroupClassKey, string>> {
  /**
   * BASIC STYLES
   */
  rootBtn?: string;
  /**
   * SELECTED
   */
  selected?: string;
  /**
   * UN-SELECTED
   */
  unselected?: string;
  /**
   * DISABLES STATE OF SWITCH
   */
  disabled?: string;
  disabledBtnSelected?: string;
  disabledBtnUnselected?: string;
}

export interface YesNoSwitchProps extends MuiToggleButtonGroupProps {
  /**
   * DEFAULT VALUE
   */
  defaultValue?: any;
  /**
   * DISABLED STATE
   */
  disabled?: boolean;
  doneCallback?: () => void;
}
