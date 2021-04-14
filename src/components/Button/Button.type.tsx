/* eslint-disable camelcase */
import { Ref } from 'react';
import { ButtonProps as MuiButtonProps, ButtonClassKey } from '@material-ui/core/Button';

export interface ButtonStylingProps extends Partial<Record<ButtonClassKey, string>> {
  /**
   * override label(children) when loading is true
   */
  loadingLabel?: string;
  /**
   * override label(children) appled to done layer (even when not visible)
   */
  doneLabel?: string;
  /**
 * override label(children) when done is true
 */
  doneLabelVisible?: string;
  /**
   * override root(button itself) when done is true
   */
  doneRoot?: string;

  secondary?: string;

   textBtn?: string;

  flushButton?: string;

  label_large?: string;
  label_medium?: string;
  label_small?: string;

  label_secondary_large?: string;
  label_secondary_medium?: string;
  label_secondary_small?: string;

  label_icon_large?: string;
  label_icon_medium?: string;
  label_icon_small?: string;

  label_icon_large_secondary?: string;
  label_icon_medium_secondary?: string;
  label_icon_small_secondary?: string;

  endIcon?: string;

  onlyIconLarge?: string;
  onlyIconMedium?: string;
  onlyIconSmall?: string;

  label_disabled?: string;
  padding?: string;
}

export interface ButtonProps extends MuiButtonProps {
  /**
   * overriden BaseProps innerRef to HTMLButtonElement
   */
  innerRef: Ref<HTMLButtonElement>;
  /**
   * replaces children with CircularProgress
   */
  loading?: boolean;
  /**
   * replaces the button with the done transition
   */
  done?: boolean;
  /**
   * callback fired once the done transition is completed
   */
  withIcon?: boolean;

  hasIconOnly?: boolean;

  isFlushButton?: boolean;

  textButton?: boolean;

  progressButton?: boolean;

  progressValue?: number;

  doneCallback?: () => void;
}
