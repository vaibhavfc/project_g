import { Ref } from 'react'
import { LinkProps as MuiLinkProps, LinkClassKey } from '@material-ui/core/Link'

export interface LinkStylingProps extends Partial<Record<LinkClassKey, string>> {
  inline?: boolean;
}

export interface LinkProps extends MuiLinkProps {
  innerRef: Ref<HTMLLinkElement>;
  disabled?: boolean;
  inlineLink?: boolean;
  doneCallback?: () => void;
}