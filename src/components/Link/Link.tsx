import React, { FC, forwardRef, useMemo } from 'react';
import { Link as MuiLink } from '@material-ui/core';
import classnames from 'classnames';
import { LinkProps, LinkStylingProps } from './Link.type';

import classes from './Link.module.scss';

import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';

const LinkWithInnerRef: FC<LinkProps> = ({
  innerRef = null,
  classes: overrideClasses = {},
  children = 'link',
  disabled = false,
  inlineLink = false,
  tabIndex = 0,
  active,
  doneCallback = () => undefined,
  ...props
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<LinkStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );
  return (
    <MuiLink
      tabIndex={tabIndex}
      classes={{
        root: classnames(mergedClasses.root, { [classes.inlineLink]: inlineLink, [classes.disabled]: disabled, [classes.active]: active }),
      }}
    >
      {children}
    </MuiLink>
  );
};

const Link = forwardRef<HTMLAnchorElement, Omit<LinkProps, 'innerRef'>>(
  (props, ref) => <LinkWithInnerRef innerRef={ref} {...props} />,
);
export default Link;
