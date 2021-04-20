import React, { FC, forwardRef, useMemo } from 'react';
import { Avatar, Box } from '@material-ui/core';
import classnames from 'classnames';
import { CardLayoutProps, CardStylingProps } from '../Card.type';
import { mergeClassesObjects } from '../../../helpers/styling/mergeClassesObjects';
import classes from '../Card.module.scss';

const CardLayoutWithInnerRef: FC<CardLayoutProps> = ({
  classes: overrideClasses = {},
  data,
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<CardStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );

  return (
    <Box
      className={mergedClasses.cardContent}
      component="div"
    >
      <Box
        component="div"
      >
        <Avatar variant="square" classes={{ root: classnames(mergedClasses.cardAvatar) }} />
      </Box>
      <Box
        className={mergedClasses.cardLayoutBody}
        component="div"
      >
        {data.content}
      </Box>
    </Box>
  );
};

const CardLayout = forwardRef<HTMLDivElement, Omit<CardLayoutProps, 'innerRef'>>(
  (props, ref) => <CardLayoutWithInnerRef innerRef={ref} {...props} />,
);
export default CardLayout;
