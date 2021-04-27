import React, {
  FC,
  forwardRef,
  useMemo,
  useState,
} from 'react';
import { Box, Switch } from '@material-ui/core';
import classnames from 'classnames';
import { ToggleProps, ToggleStylingProps } from './Toggle.type';
import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';
import classes from './Toggle.module.scss';

const ToggleWithInnerRef: FC<ToggleProps> = ({
// innerRef = null,
  classes: overrideClasses = {},

  // props
  checked = false,
  name,
  // buttonType,
  // toggleCallback = () => undefined,
  // type,

}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<ToggleStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );

  const [isChecked, setIsChecked] = useState(checked);

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
          root: mergedClasses.root,
          thumb: classnames(mergedClasses.thumb, {
            [mergedClasses.unselectedThumb]: (isChecked === false),
          }),
          track: classnames(mergedClasses.track, {
            [mergedClasses.unselectedtrack]: (isChecked === false),
          }),
        }}
        TouchRippleProps={{
          classes: {
            root: classes.ripple,
          },
        }}
        name={name}
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
