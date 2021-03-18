
import React, { FC, forwardRef, useMemo } from 'react'
import { CheckboxProps, CheckboxStylingProps } from './Checkbox.type'
import { Checkbox as MuiCheckbox, FormControlLabel, Typography } from "@material-ui/core"

import classes from './Checkbox.module.scss'

import classnames from 'classnames';

import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';

const CheckboxWithInnerRef: FC<CheckboxProps> = ({
  innerRef = null,
  classes: overrideClasses = {},
  children = 'Checkbox',
  tabIndex= 0,
  label, checked, disabled,
  ...props
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<CheckboxStylingProps>(classes, overrideClasses),
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
      control={
        <MuiCheckbox 
          disabled={disabled} checked={checked} tabIndex={tabIndex}
          classes={{
            root: classes.root,
            checked: classnames({
              [classes.disabledChecked]: (disabled && checked),
              [classes.checked]: (checked && !disabled),
            })
          }} 
        />
      }
      label={label}
      labelPlacement="end"
    />  
  )
}

const Checkbox = forwardRef<HTMLButtonElement, Omit<CheckboxProps, 'innerRef'>>(
  (props, ref) => <CheckboxWithInnerRef innerRef={ref} {...props} />
);
export default Checkbox;