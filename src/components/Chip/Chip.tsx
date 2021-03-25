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
          mergedClasses.rootStatus, {
            [classes.successStatus]: (as === 'status' && type === 'success'),
            [classes.pendingStatus]: (as === 'status' && type === 'pending'),
            [classes.warningStatus]: (as === 'status' && type === 'warning'),
            [classes.info]: (as === 'status' && type === 'info'),
          },
        ),
        sizeSmall: classnames(
          mergedClasses.rootNudge, {
            [classes.successNudge]: (as === 'nudge' && type === 'success'),
            [classes.pendingNudge]: (as === 'nudge' && type === 'pending'),
            [classes.warningNudge]: (as === 'nudge' && type === 'warning'),
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
