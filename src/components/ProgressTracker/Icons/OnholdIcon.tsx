/* eslint-disable quote-props */
import React, { FC } from 'react';

import CancelIcon from '@material-ui/icons/Cancel';

import classnames from 'classnames';
import { IconProps } from '../ProgressTracker.type';

import './Icons.scss';

const OnholdIcon: FC<IconProps> = ({
  position,
}) => (
  <CancelIcon
    classes={{
      root: classnames('onholdIcon', {
        'first': position === 'first',
        'last': position === 'last',
      }),
    }}
  />
);

export default OnholdIcon;
