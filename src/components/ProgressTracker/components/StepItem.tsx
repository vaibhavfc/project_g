/* eslint-disable max-len */
import React, { FC } from 'react';

import classnames from 'classnames';
import './StepItem.scss';

import {
  CurrentIcon,
  SuccessIcon,
  PendingIcon,
  OnholdIcon,
} from '../Icons';

import { Chip } from '../..';

import { StepItemProps } from '../ProgressTracker.type';
import Unvisited from '../Icons/Unvisted';

const StepItem: FC<StepItemProps> = ({
  stepTitle,
  stepVariant,
  stepStatus,
  stepNumber,
  isChip = false,
}) => (
  <div className="step-item">
    <div className="step-item-left">
      <div
        className={
          classnames({
            'step-item-left__linetop': (stepVariant === 'middle'),
            'step-item-left__linetopLast': (stepVariant === 'last'),
            hidden: (stepVariant === 'first'),
          })
        }
      />
      <div className="hidden" />
      {(stepStatus === 'current') ? <CurrentIcon position={stepVariant} /> : null}
      {(stepStatus === 'success') ? <SuccessIcon position={stepVariant} /> : null}
      {(stepStatus === 'pending') ? <PendingIcon position={stepVariant} /> : null}
      {(stepStatus === 'onhold') ? <OnholdIcon position={stepVariant} /> : null}
      {(stepStatus === 'unvisited') ? <Unvisited position={stepVariant} stepNumber={stepNumber} /> : null}
      <div
        className={
          classnames({
            'step-item-left__linebottom': (stepVariant === 'middle'),
            'step-item-left__linebottomFirst': (stepVariant === 'first'),
            hidden: (stepVariant === 'last'),
          })
        }
      />
    </div>
    <div className="step-item-titleWrapper">
      <h6 className="step-item-titleWrapper__text">{stepTitle}</h6>
    </div>
    <div className={!stepStatus ? 'hidden' : ''}>
      {(stepStatus === 'current' && isChip) ? <Chip chipType="status" label="YOU ARE HERE" type="info" /> : null}
      {(stepStatus === 'success' && isChip) ? <Chip chipType="status" label="SUCCESS" type="success" /> : null}
      {(stepStatus === 'pending' && isChip) ? <Chip chipType="status" label="PENDING" type="pending" /> : null}
      {(stepStatus === 'onhold' && isChip) ? <Chip chipType="status" label="ON HOLD" type="warning" /> : null}
      {(stepStatus === 'unvisited' && isChip) ? <Chip chipType="status" label="INCOMING" type="default" /> : null}
    </div>
  </div>
);

export default StepItem;
