// import { Ref } from 'react';
import { CircularProgressProps as MuiProgressIndicatorProps, CircularProgressClassKey } from '@material-ui/core/CircularProgress';

// eslint-disable-next-line max-len
export interface ProgressIndicatorStylingProps extends Partial<Record<CircularProgressClassKey, string>> {
  /**
   * FOR INDICATORS
  */
  stepProgress?: string;
  stepError?: string;
  stepSuccess?: string;
  percentageProgress?: string;
  percentageError?: string;
  percentageSuccess?: string;
  /**
   * FOR LABELS
  */
  stepProgressLabel?: string;
  stepErrorLabel?: string;
  stepSuccessLabel?: string;
  percentageProgressLabel?: string;
  percentageErrorLabel?: string;
  percentageSuccessLabel?: string;
  label?: string;
  /**
   * FOR SUPERSCRIPT
   */
  sup?: string;
}

export interface ProgressIndicatorProps extends MuiProgressIndicatorProps {
  // innerRef: Ref<HTMLAnchorElement>;
  type: 'progress' | 'error' | 'success';
  progressIndicatorType: 'step' | 'percentage';
  progressStepLabel?: string;
}
