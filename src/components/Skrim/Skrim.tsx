import React, { FC, useMemo } from 'react';
import { Typography as MuiTypography } from '@material-ui/core';
import classnames from 'classnames';
import { SkrimProps, SkrimStylingProps } from './Skrim.type';
import classes from './Skrim.module.scss';
import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';

const Skrim: FC<SkrimProps> = ({
  classes: overrideClasses = {},
  type,
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<SkrimStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );
  return (
    <MuiTypography
      component="div"
      classes={{
        root: classnames(
          mergedClasses.root, {
            [classes.modal1]: (type === 'modal1'),
            [classes.modal2]: (type === 'modal2'),
            [classes.nonModal]: (type === 'nonModal'),
          },
        ),
      }}
    />
  );
};
export default Skrim;
