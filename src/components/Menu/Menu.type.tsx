import { Ref } from 'react';
import { MenuProps as MuiMenuProps, MenuClassKey } from '@material-ui/core/Menu';

export interface MenuStylingProps extends Partial<Record<MenuClassKey, string>> {
  item?: string;
  paperRoot?: string;
  rippleClasses?: string;
}

export interface MenuProps extends MuiMenuProps {
  innerRef: Ref<HTMLDivElement>;
  items: Array<{title: string, value: any}>;
  getItemValue?: () => any;
}
