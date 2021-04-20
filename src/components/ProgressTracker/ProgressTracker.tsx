import React, { FC, useState } from 'react';

import classnames from 'classnames';

import { ProgressIndicator } from '..';
import StepItem from './components/StepItem';

import {
  ProgressTrackerProps,
  // ProgressTrackerStylingProps
} from './ProgressTracker.type';

import './ProgressTracker.scss';

const ProgressTracker: FC<ProgressTrackerProps> = ({
  steps,
  currentStep,
}) => {
  const [stepsSec, setStepsSec]: any = useState(false);

  const titles: string[] = steps.map((step) => step.title);

  const handleCurrentStep = (curr: number): number => {
    if (curr > steps.length) return steps.length;
    if (curr <= 0) return 1;
    return currentStep;
  };
  const currStep: number = handleCurrentStep(currentStep);

  const currentTitle: string = titles[currStep - 1];
  const nextTitle: string = titles[currStep];
  const progress: number = +((100 / steps.length) * currStep).toFixed();

  return (
    <div
      className={
        classnames({
          main: true,
          border: stepsSec,
        })
      }
    >
      <div className="wrapper">
        <div
          className="wrapper-indicator"
          onKeyPress={() => setStepsSec(!stepsSec)}
          onClick={() => setStepsSec(!stepsSec)}
          tabIndex={0}
          role="button"
        >
          <ProgressIndicator
            type="progress"
            progressIndicatorType="step"
            value={progress}
            progressStepLabel={`${currStep}/${titles.length}`}
          />
        </div>
        <div className="wrapper-rightTitles">
          <h6 className="wrapper-rightTitles__title">{currentTitle}</h6>
          <h6 className="wrapper-rightTitles__subtitle">
            {
              (steps.length === currStep) ? 'ALMOST DONE' : `NEXT: ${nextTitle}`
            }
          </h6>
        </div>
      </div>
      <div
        className={
          classnames({
            hide: (stepsSec === false),
            unhide: (stepsSec === true),
          })
        }
      >
        {
          steps?.map(({
            title, variant, status, chip,
          }, index) => (
            <StepItem
              key={title}
              stepTitle={title}
              stepVariant={variant}
              stepStatus={status}
              stepNumber={index + 1}
              isChip={chip}
            />
          ))
        }
      </div>
    </div>
  );
};

export default ProgressTracker;
