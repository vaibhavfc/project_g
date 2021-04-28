import { Ref } from 'react';
import { TypographyProps as MuiInputHelperProps, TypographyClassKey } from '@material-ui/core';

export interface InputHelperStylingProps extends Partial<Record<TypographyClassKey, string>> {
/**
 * inputWraper && valueWraper && valueWraperSelected
 */
  inputWraper?: string
  valueWraper?: string
  valueWraperSelected?: string
/**
 * rootContainer
 */
  rootContainer?: string
  /**
  * valueSpan && valueSpanSelected
  */
  valueSpan?: string
  valueSpanSelected?: string
}

export interface InputHelperProps extends MuiInputHelperProps {
  innerRef: Ref<HTMLDivElement>,
  prefix?: string,
  suffix?: string,
  label?: string,
  placeholder?: string,
  inputValues?: [number, number, number],
  trailingIcon?: any,
  onChange?: (any) => void,
}
