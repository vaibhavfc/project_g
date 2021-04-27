/* eslint-disable max-len */
import { Ref } from 'react';
import { SwitchProps as MuiSwitchProps, SwitchClassKey } from '@material-ui/core';


export interface ToggleStylingProps extends Partial<Record<SwitchClassKey, string>> {
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
   * switchBtn
   */
  switchBtn?: string
  switchBtn1?: string
  switchBase?: string
  switchBase1?: string
  /**
   * thumb
   */
  thumb?: string
  thumb1?: string
  unselectedThumb?: string
  /**
   * colorSecondary && colorPrimary
   */
  colorSecondary?: string
  colorSecondary1?: string
  colorPrimary?: string

   /**
    *track && unselectedtrack
    */
  track?: string
  unselectedtrack?: string
  /**
   * checked1
   */
  checked?: string
  checked1?: string
}

export interface ToggleProps extends MuiSwitchProps {
  innerRef: Ref<HTMLDivElement>;
  checked: boolean;
  toggleCallback?: () => void;
}
