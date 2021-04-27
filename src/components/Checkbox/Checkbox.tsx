import React, { FC, forwardRef, useMemo } from 'react';
import { Checkbox as MuiCheckbox, FormControlLabel } from '@material-ui/core';
import classnames from 'classnames';
import { CheckboxProps, CheckboxStylingProps } from './Checkbox.type';

import classes from './Checkbox.module.scss';

import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';

const CheckboxWithInnerRef: FC<CheckboxProps> = ({
  classes: overrideClasses = {},
  tabIndex = 0,
  label,
  checked,
  disabled,
  value,
  name,
  ...props
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<CheckboxStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );

  return (
    <FormControlLabel
      classes={{
        label: classes.label,
      }}
      control={(
        <MuiCheckbox
          name={name}
          disabled={disabled}
          checked={checked}
          tabIndex={tabIndex}
          value={value}
          classes={{
            root: mergedClasses.root,
            checked: classnames({
              [classes.disabledChecked]: (disabled && checked),
              [classes.checked]: (checked && !disabled),
            }),
          }}
          {...props}
        />
      )}
      label={label}
      labelPlacement="end"
    />
  );
};

const Checkbox = forwardRef<HTMLButtonElement, Omit<CheckboxProps, 'innerRef'>>(
  (props, ref) => <CheckboxWithInnerRef innerRef={ref} {...props} />,
);
export default Checkbox;
