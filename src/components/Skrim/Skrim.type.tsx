// import { Ref } from 'react';
import { TypographyProps as MuiTypographyProps, TypographyClassKey } from '@material-ui/core/Typography';

export interface SkrimStylingProps extends Partial<Record<TypographyClassKey, string>> {
}

export interface SkrimProps extends MuiTypographyProps {
  // innerRef: Ref<HTMLDivElement>;
  type: 'modal1' | 'modal2' | 'nonModal';
  children ?: any;
}
