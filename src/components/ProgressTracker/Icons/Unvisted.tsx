/* eslint-disable quote-props */
import React, { FC } from 'react';

import classnames from 'classnames';
import { IconProps } from '../ProgressTracker.type';

import './Icons.scss';

const Unvisited: FC<IconProps> = ({
  position,
  stepNumber,
}) => (
  <div
    className={
      classnames('unvisited', {
        'first': position === 'first',
        'last': position === 'last',
      })
    }
  >
    <span className="unvisited-number">{stepNumber}</span>
  </div>
);

export default Unvisited;
