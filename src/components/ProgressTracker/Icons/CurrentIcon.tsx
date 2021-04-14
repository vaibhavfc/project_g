/* eslint-disable quote-props */
import React, { FC } from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

import classnames from 'classnames';
import { IconProps } from '../ProgressTracker.type';

import './Icons.scss';

const CurrentIcon: FC<IconProps> = ({
  position,
}) => (
  <PlayCircleFilledIcon
    classes={{
      root: classnames('currentIcon', {
        'first': position === 'first',
        'last': position === 'last',
      }),
    }}
  />
);

export default CurrentIcon;
