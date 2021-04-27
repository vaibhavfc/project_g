/* eslint-disable react/no-array-index-key */
import React, { FC, useMemo } from 'react';
import {
  Checkbox as MuiCheckbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@material-ui/core';
import classnames from 'classnames';
import { CheckboxListProps, CheckboxListStylingProps } from './CheckboxList.type';

import classes from './CheckboxList.module.scss';

import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';

const CheckboxList: FC<CheckboxListProps> = ({
  classes: overrideClasses = {},
  tabIndex = 0,
  list,
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<CheckboxListStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel
        component="legend"
        classes={{
          root: classnames(classes.formLabel),
          // focused: classnames(classes.formLabel)
        }}
      >
        {list.title}
      </FormLabel>
      <FormGroup>
        {
          list.items?.map(({
            name,
            label,
            value,
            disabled,
            checked,
          }, index) => (
            <FormControlLabel
              classes={{
                label: classes.label,
              }}
              control={(
                <MuiCheckbox
                  key={index}
                  name={name}
                  id={name}
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
                />
              )}
              label={label}
              labelPlacement="end"
            />
          ))
        }
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxList;
