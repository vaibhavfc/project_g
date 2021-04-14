/* eslint-disable quote-props */
import React, { FC } from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import classnames from 'classnames';
import { IconProps } from '../ProgressTracker.type';

import './Icons.scss';

const SuccessIcon: FC<IconProps> = ({
  position,
}) => (
  <CheckCircleIcon
    classes={{
      root: classnames('successIcon', {
        'first': position === 'first',
        'last': position === 'last',
      }),
    }}
  />
);

export default SuccessIcon;
