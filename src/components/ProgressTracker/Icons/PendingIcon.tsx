/* eslint-disable quote-props */
import React, { FC } from 'react';
import ErrorIcon from '@material-ui/icons/Error';

import classnames from 'classnames';
import { IconProps } from '../ProgressTracker.type';

import './Icons.scss';

const PendingIcon: FC<IconProps> = ({
  position,
}) => (
  <ErrorIcon
    classes={{
      root: classnames('pendingIcon', {
        'first': position === 'first',
        'last': position === 'last',
      }),
    }}
  />
);

export default PendingIcon;
