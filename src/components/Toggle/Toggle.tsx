import { Box, Switch } from '@material-ui/core';
import React, {
  FC,
  forwardRef,
  useMemo,
} from 'react';
import classnames from 'classnames';
import { ToggleProps, ToggleStylingProps } from './Toggle.type';
import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';
import classes from './Toggle.module.scss';

const ToggleWithInnerRef: FC<ToggleProps> = ({
// innerRef = null,
  classes: overrideClasses = {},

  // props
  checked = false,
  // buttonType,
  toggleCallback = () => undefined,
  // type,

}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<ToggleStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );

  return (
    <Box
      className={mergedClasses.rootBtn}
      component="div"
    >
      <Switch
        classes={{
          root: classnames(mergedClasses.switchBtn, {
            [mergedClasses.switchBtn1]: (checked === true),
          }),
          switchBase: classnames(mergedClasses.switchBase, {
            [mergedClasses.switchBase1]: (checked === true),
          }),
          checked: classnames(mergedClasses.checked),
          thumb: classnames(mergedClasses.thumb, {
            [mergedClasses.unselectedThumb]: (checked === false),
          }),
          colorSecondary: classnames(mergedClasses.colorSecondary, {
            [mergedClasses.colorSecondary1]: (checked === true),
          }),
          colorPrimary: classnames(mergedClasses.colorPrimary),
          track: classnames(mergedClasses.track),
        }}
        TouchRippleProps={{
          classes: {
            root: classes.ripple,
          },
        }}
        checked={checked}
        onChange={toggleCallback}
      />
    </Box>
  );
};

const Toggle = forwardRef<HTMLDivElement, Omit<ToggleProps, 'innerRef'>>(
  (props, ref) => <ToggleWithInnerRef innerRef={ref} {...props} />,
);
export default Toggle;
