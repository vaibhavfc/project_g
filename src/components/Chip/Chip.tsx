import React, { FC, forwardRef, useMemo } from 'react';
import { Chip as MuiChip } from '@material-ui/core';
import classnames from 'classnames';
import { ChipProps, ChipStylingProps } from './Chip.type';

import classes from './Chip.module.scss';

import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';

const ChipWithInnerRef: FC<ChipProps> = ({
  innerRef = null,
  classes: overrideClasses = {},
  children = 'Chip',
  variant = 'default',
  size,
  label,
  type,
  doneCallback = () => undefined,
  ...props
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<ChipStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );
  return (
    <MuiChip
      label={label}
      variant={variant}
      size={size}
      classes={{
        root: classnames(
          mergedClasses.rootMedium, {
            [classes.successMedium]: (size === 'medium' && type === 'success'),
            [classes.pendingMedium]: (size === 'medium' && type === 'pending'),
            [classes.warningMedium]: (size === 'medium' && type === 'warning'),
            [classes.info]: (size === 'medium' && type === 'info'),
          },
        ),
        sizeSmall: classnames(
          mergedClasses.rootSmall, {
            [classes.successSmall]: (size === 'small' && type === 'success'),
            [classes.pendingSmall]: (size === 'small' && type === 'pending'),
            [classes.warningSmall]: (size === 'small' && type === 'warning'),
            [classes.info]: (size === 'small' && type === 'info'),
          },
        ),
      }}
    />
  );
};

const Chip = forwardRef<HTMLDivElement, Omit<ChipProps, 'innerRef'>>(
  (props, ref) => <ChipWithInnerRef innerRef={ref} {...props} />,
);
export default Chip;
