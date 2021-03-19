
import React, { FC, useMemo } from 'react'
import { BreadcrumbsProps, BreadcrumbsStylingProps } from './Breadcrumbs.type'
import { Breadcrumbs as MuiBreadcrumbs } from "@material-ui/core"

// import { MemoryRouter as Router } from 'react-router'
// import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom'
// import { Omit } from '@material-ui/types';

import classes from './Breadcrumbs.module.scss'
import classnames from 'classnames';

import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';

import Link from '../Link/Link'

const Breadcrumbs: FC<BreadcrumbsProps> = ({
  innerRef = null,
  classes: overrideClasses = {},
  children,
  maxItems = 4,
  itemsAfterCollapse = 3,
  links= [],
  ...props
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<BreadcrumbsStylingProps>(classes, overrideClasses),
    [overrideClasses], 
  );

  return (
    <div>
        <MuiBreadcrumbs
          aria-label="breadcrumb"
          maxItems={maxItems}
          itemsAfterCollapse={itemsAfterCollapse}
          classes={{
            root: classnames(mergedClasses.root),
            ol: classnames(mergedClasses.li)
          }}
        >
            {links?.map(({ href, linkText, active }) => {
              return (
                <Link active={active} to={href} aria-current='page'>
                  {linkText}
                </Link>
              )
            })}
        </MuiBreadcrumbs>
    </div>
  )
}

// const Breadcrumbs = forwardRef<HTMLElement, Omit<BreadcrumbsProps, 'innerRef'>>(
//   (props, ref) => <BreadcrumbsWithInnerRef innerRef={ref} {...props} />
// );

export default Breadcrumbs;