
import React, { FC, forwardRef, useMemo } from 'react'
import { LinkProps, LinkStylingProps } from './Link.type'
import { Link as MuiLink } from "@material-ui/core"
import { Link as RouterLink } from 'react-router-dom';
import { MemoryRouter as Router } from 'react-router';
import classes from './Link.module.scss'

import classnames from 'classnames';

import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';

const LinkWithInnerRef: FC<LinkProps> = ({
  innerRef = null,
  classes: overrideClasses = {},
  children = 'link',
  disabled = false,
  inlineLink = false,
  tabIndex=0,
  active,
  to="#",
  doneCallback = () => undefined,
  ...props
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<LinkStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );
  return (
    <Router>
      <MuiLink
        component={RouterLink}
        tabIndex={tabIndex}
        classes={{
          root: classnames(mergedClasses.root, { [classes.inlineLink]: inlineLink, [classes.disabled]: disabled, [classes.active]: active  })
        }}
        to={to}
      >
        {children}
      </MuiLink>
    </Router>)
}

const Link = forwardRef<HTMLAnchorElement, Omit<LinkProps, 'innerRef'>>(
  (props, ref) => <LinkWithInnerRef innerRef={ref} {...props} />
);
export default Link;