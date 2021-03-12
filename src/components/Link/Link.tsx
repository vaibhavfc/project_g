
import React, { FC, forwardRef, useMemo } from 'react'
import { LinkProps, LinkStylingProps } from './Link.type'
import { Link as MuiLink } from "@material-ui/core"

import classes from './Link.module.scss'

import classnames from 'classnames';

import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';

const LinkWithInnerRef: FC<LinkProps> = ({
  innerRef = null,
  classes: overrideClasses = {},
  children = 'link',
  disabled = false,
  inlineLink = false,
  // doneCallback = () => undefined,
  ...props
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<LinkStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );
  return (
    <MuiLink
      classes={{
        root: classnames(mergedClasses.root, { [classes.inlineLink]: inlineLink, [classes.disabled]: disabled })
      }}
    >
      {children}
    </MuiLink>)
}

const Link = forwardRef<HTMLLinkElement, Omit<LinkProps, 'innerRef'>>(
  (props, ref) => <LinkWithInnerRef innerRef={ref} {...props} />
);
export default Link;