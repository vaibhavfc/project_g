
import React, { FC, forwardRef, useMemo } from 'react'
import { BreadcrumbsProps, BreadcrumbsStylingProps } from './Breadcrumbs.type'
import { Breadcrumbs as MuiBreadcrumbs } from "@material-ui/core"

import classes from './Breadcrumbs.module.scss'

import classnames from 'classnames';

import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';

import Link from '../Link/Link'

const BreadcrumbsWithInnerRef: FC<BreadcrumbsProps> = ({
  innerRef = null,
  classes: overrideClasses = {},
  children,
  maxItems = 4,
  itemsAfterCollapse = 3,
  ...props
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<BreadcrumbsStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );
  return (
    <div>
      <MuiBreadcrumbs
        maxItems={maxItems}
        itemsAfterCollapse={itemsAfterCollapse}
        classes={{
          root: classnames(mergedClasses.root),
          ol: classnames(mergedClasses.li)
        }}
      >
        <Link href='#' >
          Breadcrumb
        </Link>
        <Link
          href='#'
          aria-current='page'
          classes={{
            root: classnames(mergedClasses.active)
          }}
        >
          Current Page
        </Link>
      </MuiBreadcrumbs>
      <MuiBreadcrumbs
        maxItems={maxItems}
        itemsAfterCollapse={itemsAfterCollapse}
        classes={{
          root: classnames(mergedClasses.root),
          ol: classnames(mergedClasses.li)
        }}
      >
        <Link href='#' >
          Breadcrumb
        </Link>
        <Link href='#' >
          Breadcrumb
        </Link>
        <Link
          href='#'
          aria-current='page'
          classes={{
            root: classnames(mergedClasses.active)
          }}
        >
          Current Page
        </Link>
      </MuiBreadcrumbs>
      <MuiBreadcrumbs
        maxItems={maxItems}
        itemsAfterCollapse={itemsAfterCollapse}
        classes={{
          root: classnames(mergedClasses.root),
          ol: classnames(mergedClasses.li)
        }}
      >
        <Link href='#' >
          Breadcrumb
        </Link>
        <Link href='#' >
          Breadcrumb
        </Link>
        <Link href='#' >
          Breadcrumb
        </Link>
        <Link
          href='#'
          aria-current='page'
          classes={{
            root: classnames(mergedClasses.active)
          }}
        >
          Current Page
        </Link>
      </MuiBreadcrumbs>
      <MuiBreadcrumbs
        maxItems={maxItems}
        itemsAfterCollapse={itemsAfterCollapse}
        classes={{
          root: classnames(mergedClasses.root),
          ol: classnames(mergedClasses.li)
        }}
      >
        <Link href='#' >
          Breadcrumb
        </Link>
        <Link href='#' >
          Breadcrumb
        </Link>
        <Link href='#' >
          Breadcrumb
        </Link>
        <Link href='#' >
          Breadcrumb
        </Link>
        <Link href='#' >
          Breadcrumb
        </Link>
        <Link
          href='#'
          aria-current='page'
          classes={{
            root: classnames(mergedClasses.active)
          }}
        >
          Current Page
        </Link>
      </MuiBreadcrumbs>
    </div>
  )
}

const Breadcrumbs = forwardRef<HTMLElement, Omit<BreadcrumbsProps, 'innerRef'>>(
  (props, ref) => <BreadcrumbsWithInnerRef innerRef={ref} {...props} />
);
export default Breadcrumbs;