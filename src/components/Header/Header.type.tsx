import { Ref } from 'react';
import { SvgIconProps as MuiSvgIconProps, SvgIconClassKey } from '@material-ui/core/SvgIcon';

export interface HeaderStylingProps extends Partial<Record<SvgIconClassKey, string>> {
}

export interface HeaderProps extends MuiSvgIconProps {
  innerRef: Ref<SVGSVGElement>;
  size: 'medium' | 'large'
}
