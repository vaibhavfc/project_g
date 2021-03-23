import React, { FC, useMemo } from 'react';
import { Container as MuiContainer } from '@material-ui/core';
import classnames from 'classnames';
import { SkrimProps, SkrimStylingProps } from './Skrim.type';

import classes from './Skrim.module.scss';

import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';

const Skrim: FC<SkrimProps> = ({
  // innerRef = null,
  classes: overrideClasses = {},
  children,
  type,
  // ...props
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<SkrimStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );
  return (
    <MuiContainer
      classes={{
        root: classnames(
          mergedClasses.root, {
            [classes.modal1]: (type === 'modal1'),
            [classes.modal2]: (type === 'modal2'),
            [classes.nonModal]: (type === 'nonModal'),
          },
        ),
      }}
    >
      {children}
    </MuiContainer>
  );
};

// const Skrim = forwardRef<HTMLDivElement, Omit<SkrimProps, 'innerRef'>>(
//   (props, ref) => <SkrimWithInnerRef innerRef={ref} {...props} />,
// );
export default Skrim;
