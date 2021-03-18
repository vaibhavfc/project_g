import React, { FC, forwardRef, useMemo } from 'react';
import {
  Checkbox as MuiCheckbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Typography,
} from '@material-ui/core';
import classnames from 'classnames';
import { CheckboxListProps, CheckboxListStylingProps } from './CheckboxList.type';

import classes from './CheckboxList.module.scss';

import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';

const CheckboxList: FC<CheckboxListProps> = ({
  innerRef = null,
  classes: overrideClasses = {},
  children = 'CheckboxList',
  tabIndex = 0,
  list,
  ...props
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<CheckboxListStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );

  // const [clicked, setClicked] = React.useState(false);

  // const handleChange = (event: React.ChangeEvent<HTMLButtonElement>) => {
  //   setClicked(event.target.checked);
  //   return clicked;
  // };

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
          list.items?.map((checkbox) => (
            <FormControlLabel
              classes={{
                label: classes.label,
              }}
              value="end"
              control={(
                <MuiCheckbox
                  disabled={checkbox.disabled}
                  checked={checkbox.checked}
                  tabIndex={tabIndex}
                  classes={{
                    root: classes.root,
                    checked: classnames({
                      [classes.disabledChecked]: (checkbox.disabled && checkbox.checked),
                      [classes.checked]: (checkbox.checked && !checkbox.disabled),
                    }),
                  }}
                />
                )}
              label={checkbox.label}
              labelPlacement="end"
            />
          ))
        }
      </FormGroup>
    </FormControl>
  );
};

// const CheckboxList = forwardRef<HTMLInputElement, Omit<CheckboxListProps, 'innerRef'>>(
//   (props, ref) => <CheckboxListWithInnerRef innerRef={ref} {...props} />
// );

export default CheckboxList;
