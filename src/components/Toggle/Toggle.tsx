import { Box, Switch } from '@material-ui/core';
import React, {
  FC,
  forwardRef,
  useMemo,
  useState,
} from 'react';
import classnames from 'classnames';
import { ToggleProps, ToggleStylingProps } from './Toggle.type';
import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';
import classes from './Toggle.module.scss';

const ToggleWithInnerRef: FC<ToggleProps> = ({
// innerRef = null,
  classes: overrideClasses = {},

  // props
  // checked = false,
  // buttonType,
  // toggleCallback = () => undefined,
  // type,

}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<ToggleStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );

  const [isChecked, setIsChecked] = useState(false);

  const toggleHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Box
      className={mergedClasses.rootBtn}
      component="div"
    >
      <Switch
        classes={{
          thumb: classnames(mergedClasses.thumb),
          track: classnames(mergedClasses.track, {
            [mergedClasses.unselectedtrack]: (isChecked === false),
          }),
        }}
        // TouchRippleProps={{
        //   classes: {
        //     root: classes.ripple,
        //   },
        checked={isChecked}
        onClick={toggleHandler}
      />
    </Box>
  );
};

const Toggle = forwardRef<HTMLDivElement, Omit<ToggleProps, 'innerRef'>>(
  (props, ref) => <ToggleWithInnerRef innerRef={ref} {...props} />,
);
export default Toggle;
