/* eslint-disable max-len */
/* eslint-disable no-else-return */
import React, { FC, useMemo } from 'react';

import { Box as MuiBox, CircularProgress as MuiCircularProgress, Typography as MuiTypography } from '@material-ui/core';

import classnames from 'classnames';

import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import PriorityHighRoundedIcon from '@material-ui/icons/PriorityHighRounded';

import { ProgressIndicatorProps, ProgressIndicatorStylingProps } from './ProgressIndicator.type';

import classes from './ProgressIndicator.module.scss';

import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';

const ProgressIndicator: FC<ProgressIndicatorProps> = ({
  // innerRef = null,
  classes: overrideClasses = {},
  progressIndicatorType,
  type,
  value,
  progressStepLabel,
  ...props
}) => {
  // eslint-disable-next-line no-unused-vars
  const mergedClasses = useMemo(
    () => mergeClassesObjects<ProgressIndicatorStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );

  // const handleValue = (): number => {
  //   if (progressIndicatorType === 'percentage' && type === 'progress') {
  //     return value;
  //   }
  //   return progressStepLabel;
  // };

  // `${Math.round(progress)}${percentage.sup()}`

  return (
    <MuiBox position="relative" display="inline-flex">
      <div className={progressIndicatorType === 'step' ? classes.outlineStep : classes.outlinePercentage}>
        <MuiCircularProgress
          variant="determinate"
          value={value}
          classes={{
            root: classnames({
              [mergedClasses.stepProgress]: (type === 'progress' && progressIndicatorType === 'step' && value !== 100),
              [mergedClasses.stepError]: (type === 'error' && progressIndicatorType === 'step' && value !== 100),
              [mergedClasses.stepSuccess]: progressIndicatorType === 'step' && value === 100,
              [mergedClasses.percentageProgress]: (type === 'progress' && progressIndicatorType === 'percentage' && value !== 100),
              [mergedClasses.percentageError]: (type === 'error' && progressIndicatorType === 'percentage' && value !== 100),
              [mergedClasses.percentageSuccess]: progressIndicatorType === 'percentage' && value === 100,
            }),
          }}
          {...props}
        />
      </div>
      <MuiBox
        justifyContent="space-around"
      >
        <MuiBox
          alignItems="center"
          justifyContent="center"
          display="flex"
          position="absolute"
          top={0}
          left={0}
          bottom={0}
          right={0}
        >
          <MuiTypography
            classes={{
              root: classnames(mergedClasses.label, {
                [mergedClasses.stepProgressLabel]: (type === 'progress' && progressIndicatorType === 'step' && value !== 100),
                [mergedClasses.stepErrorLabel]: (type === 'error' && progressIndicatorType === 'step' && value !== 100),
                [mergedClasses.stepSuccessLabel]: (value === 100) && progressIndicatorType === 'step',
                [mergedClasses.percentageProgressLabel]: (type === 'progress' && progressIndicatorType === 'percentage' && value !== 100),
                [mergedClasses.percentageErrorLabel]: (type === 'error' && progressIndicatorType === 'percentage' && value !== 100),
                [mergedClasses.percentageSuccessLabel]: (value === 100) && progressIndicatorType === 'percentage',
              }),
            }}
          >
            {progressIndicatorType === 'percentage' && type === 'progress' && value !== 100 ? value : ''}
            {progressIndicatorType === 'step' && type === 'progress' && value !== 100 ? progressStepLabel : ''}
            {(type === 'error' && value !== 100) ? <PriorityHighRoundedIcon className={classnames({ [classes.stepIcon]: progressIndicatorType === 'step', [classes.percentageIcon]: progressIndicatorType === 'percentage' })} /> : ''}
            {value === 100 ? <DoneRoundedIcon className={classnames({ [classes.stepIcon]: progressIndicatorType === 'step', [classes.percentageIcon]: progressIndicatorType === 'percentage' })} /> : ''}
            {/* {(type === 'error' && value !== 100) ? <Error className={classnames({ [classes.stepIcon]: progressIndicatorType === 'step', [classes.percentageIcon]: progressIndicatorType === 'percentage' })} /> : ''}
            {value === 100 ? <Success className={classnames({ [classes.stepIcon]: progressIndicatorType === 'step', [classes.percentageIcon]: progressIndicatorType === 'percentage' })} /> : ''} */}
            {/* {(!value) ? `${progress}` : ''} */}
          </MuiTypography>
        </MuiBox>
        <MuiBox
          top={0}
          left={0}
          bottom={0}
          right={4}
          justifyContent="flex-end"
          alignItems="center"
          display="flex"
          position="absolute"
        >
          <sup className={mergedClasses.sup}>{((progressIndicatorType === 'percentage' && type === 'progress' && value !== 100)) ? '%' : ''}</sup>
        </MuiBox>
      </MuiBox>
    </MuiBox>
  );
};

export default ProgressIndicator;
