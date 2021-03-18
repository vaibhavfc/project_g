import { Ref } from 'react'
import { LinkProps as MuiLinkProps, LinkClassKey } from '@material-ui/core/Link'
export interface LinkStylingProps extends Partial<Record<LinkClassKey, string>> {
}

export interface LinkProps extends MuiLinkProps {
  innerRef: Ref<HTMLAnchorElement>;
  disabled?: boolean;
  inlineLink?: boolean;
  active?:boolean;
  to?:string;
  doneCallback?: () => void;
}
