import React, { FC, forwardRef, useMemo } from 'react';
import { Radio as MuiRadio, FormControlLabel } from '@material-ui/core';
import classnames from 'classnames';
import { RadioProps, RadioStylingProps } from './Radio.type';

import classes from './Radio.module.scss';

import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';

const RadioWithInnerRef: FC<RadioProps> = ({
  // innerRef = null,
  classes: overrideClasses = {},
  // children = 'Radio',
  tabIndex = 0,
  label, checked, disabled,
  // ...props
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<RadioStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );

  // const [clicked, setClicked] = React.useState(false);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setClicked(event.target.checked);
  //   return clicked;
  // };

  return (
    <FormControlLabel
      classes={{
        label: classes.label,
      }}
      value="end"
      control={(
        <MuiRadio
          disabled={disabled}
          checked={checked}
          tabIndex={tabIndex}
          classes={{
            root: mergedClasses.root,
            checked: classnames({
              [classes.disabledChecked]: (disabled && checked),
              [classes.checked]: (checked && !disabled),
            }),
          }}
        />
      )}
      label={label}
      labelPlacement="end"
    />
  );
};

const Radio = forwardRef<HTMLButtonElement, Omit<RadioProps, 'innerRef'>>(
  (props, ref) => <RadioWithInnerRef innerRef={ref} {...props} />,
);
export default Radio;
