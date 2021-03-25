import React, { FC, forwardRef, useMemo } from 'react';
import { Divider as MuiDivider } from '@material-ui/core';
import classnames from 'classnames';
import { DividerProps, DividerStylingProps } from './Divider.type';

import classes from './Divider.module.scss';

import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';

const DividerWithInnerRef: FC<DividerProps> = ({
  // innerRef = null,
  classes: overrideClasses = {},
  orientation,
  size,
  // ...props
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<DividerStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );
  //! WIDTH - need to change
  return (
    <MuiDivider
      orientation={orientation}
      // eslint-disable-next-line jsx-a11y/aria-role
      role="devider"
      classes={{
        root: classnames(
          mergedClasses.root, {
            [classes.smallHorizontal]: (size === 'small' && orientation === 'horizontal'),
            [classes.largeHorizontal]: (size === 'large' && orientation === 'horizontal'),
            [classes.largeVertical]: (size === 'large' && orientation === 'vertical'),
            [classes.smallVertical]: (size === 'small' && orientation === 'vertical'),
          },
        ),
      }}
    />
  );
};

const Divider = forwardRef<HTMLHRElement, Omit<DividerProps, 'innerRef'>>(
  (props, ref) => <DividerWithInnerRef innerRef={ref} {...props} />,
);
export default Divider;
