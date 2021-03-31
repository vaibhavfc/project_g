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

  doneCallback?: () => void;
}