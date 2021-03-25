import React, { FC, forwardRef, useMemo } from 'react';
import { Chip as MuiChip } from '@material-ui/core';
import classnames from 'classnames';
import { ChipProps, ChipStylingProps } from './Chip.type';

import classes from './Chip.module.scss';

import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';

const ChipWithInnerRef: FC<ChipProps> = ({
  // innerRef = null,
  classes: overrideClasses = {},
  // children = 'Chip',
  variant = 'default',
  label,
  as,
  type,
  // doneCallback = () => undefined,
  // ...props
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<ChipStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );

  const handleSize = (asInput: string) => {
    if (asInput === 'status') {
      return 'medium';
    }
    return 'small';
  };

  return (
    <MuiChip
      label={label}
      variant={variant}
      size={handleSize(as)}
      classes={{
        root: classnames(
<<<<<<< HEAD
          mergedClasses.rootMedium, {
            [classes.successMedium]: (as === 'status' && type === 'success'),
            [classes.pendingMedium]: (as === 'status' && type === 'pending'),
            [classes.warningMedium]: (as === 'status' && type === 'warning'),
=======
          mergedClasses.rootStatus, {
            [classes.successStatus]: (as === 'status' && type === 'success'),
            [classes.pendingStatus]: (as === 'status' && type === 'pending'),
            [classes.warningStatus]: (as === 'status' && type === 'warning'),
>>>>>>> 6c4049120033ab23882b1647c09a625b474602de
            [classes.info]: (as === 'status' && type === 'info'),
          },
        ),
        sizeSmall: classnames(
<<<<<<< HEAD
          mergedClasses.rootSmall, {
            [classes.successSmall]: (as === 'nudge' && type === 'success'),
            [classes.pendingSmall]: (as === 'nudge' && type === 'pending'),
            [classes.warningSmall]: (as === 'nudge' && type === 'warning'),
=======
          mergedClasses.rootNudge, {
            [classes.successNudge]: (as === 'nudge' && type === 'success'),
            [classes.pendingNudge]: (as === 'nudge' && type === 'pending'),
            [classes.warningNudge]: (as === 'nudge' && type === 'warning'),
>>>>>>> 6c4049120033ab23882b1647c09a625b474602de
            [classes.info]: (as === 'nudge' && type === 'info'),
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
