/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React, { FC, useMemo } from 'react';
import {
  Radio as MuiRadio,
  FormControl,
  FormControlLabel,
  RadioGroup as MuiRadioGroup,
  FormLabel,
} from '@material-ui/core';
import classnames from 'classnames';
import { RadioListProps, RadioListStylingProps } from './RadioList.type';

import classes from './RadioList.module.scss';

import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';

const RadioList: FC<RadioListProps> = ({
  classes: overrideClasses = {},
  tabIndex = 0,
  list,
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<RadioListStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );

  const [selectedValue, setSelectedValue] = React.useState(list.defaultValue || null);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue((event.target as HTMLInputElement).value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue((event.target as HTMLInputElement).value);
  };

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
      <MuiRadioGroup
        value={selectedValue}
        onChange={handleRadioChange}
        aria-label={list.title}
        name={list.title}
        defaultValue={list.defaultValue}
      >
        {
          list.items?.map(({
            label,
            value,
            name,
            checked,
            disabled,
          }, index) => (
            <FormControlLabel
              key={index}
              classes={{
                label: classes.label,
              }}
              value={value}
              control={(
                <MuiRadio
                  key={index}
                  id={name}
                  name={name}
                  disabled={disabled}
                  checked={selectedValue === value || checked}
                  tabIndex={tabIndex}
                  value={value}
                  onClick={() => setSelectedValue(value)}
                  onChange={handleChange}
                  classes={{
                    root: mergedClasses.root,
                    checked: classnames({
                      [classes.disabledChecked]: (disabled && (checked || selectedValue === value)),
                      [classes.checked]: ((selectedValue === value || checked) && !disabled),
                      // [classes.checked]: (checked && !disabled),
                    }),
                  }}
                />
              )}
              label={label}
              labelPlacement="end"
            />
          ))
        }
      </MuiRadioGroup>
    </FormControl>
  );
};

export default RadioList;
