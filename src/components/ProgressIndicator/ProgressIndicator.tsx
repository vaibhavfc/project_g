/* eslint-disable no-else-return */
import React, { FC, useMemo } from 'react';

import { Box as MuiBox, CircularProgress as MuiCircularProgress, Typography as MuiTypography } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

import classnames from 'classnames';
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

  //* FOR DEMO
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <MuiBox position="relative" display="inline-flex">
      <div className={progressIndicatorType === 'step' ? classes.outlineStep : classes.outlinePercentage}>
        <MuiCircularProgress
          variant="determinate"
          value={(!value) ? progress : value}
          classes={{
            root: classnames({
              [mergedClasses.stepProgress]: (type === 'progress' && progressIndicatorType === 'step'),
              [mergedClasses.stepError]: (type === 'error' && progressIndicatorType === 'step'),
              [mergedClasses.stepSuccess]: (type === 'success' && progressIndicatorType === 'step'),
              [mergedClasses.percentageProgress]: (type === 'progress' && progressIndicatorType === 'percentage'),
              [mergedClasses.percentageError]: (type === 'error' && progressIndicatorType === 'percentage'),
              [mergedClasses.percentageSuccess]: (type === 'success' && progressIndicatorType === 'percentage'),
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
            // component=""
            classes={{
              root: classnames(mergedClasses.label, {
                [mergedClasses.stepProgressLabel]: (type === 'progress' && progressIndicatorType === 'step'),
                [mergedClasses.stepErrorLabel]: (type === 'error' && progressIndicatorType === 'step'),
                [mergedClasses.stepSuccessLabel]: (type === 'success' && progressIndicatorType === 'step'),
                [mergedClasses.percentageProgressLabel]: (type === 'progress' && progressIndicatorType === 'percentage'),
                [mergedClasses.percentageErrorLabel]: (type === 'error' && progressIndicatorType === 'percentage'),
                [mergedClasses.percentageSuccessLabel]: (type === 'success' && progressIndicatorType === 'percentage'),
              }),
            }}
          >
            {progressIndicatorType === 'percentage' && type === 'progress' ? value : ''}
            {progressIndicatorType === 'step' && type === 'progress' ? progressStepLabel : ''}
            {type === 'error' && value ? <PriorityHighIcon /> : ''}
            {value === 100 ? <DoneIcon /> : ''}
            {(!value) ? `${progress}` : ''}
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
          <sup className={mergedClasses.sup}>{((progressIndicatorType === 'percentage' && type === 'progress')) ? '%' : ''}</sup>
        </MuiBox>
      </MuiBox>
    </MuiBox>
  );
};

export default ProgressIndicator;
