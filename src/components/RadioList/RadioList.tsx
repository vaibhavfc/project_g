
import React, { FC, forwardRef, useMemo } from 'react'
import { RadioListProps, RadioListStylingProps } from './RadioList.type'
import { Radio as MuiRadio, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Typography } from "@material-ui/core"

import classes from './RadioList.module.scss'

import classnames from 'classnames';

import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';

const RadioList: FC<RadioListProps> = ({
  innerRef = null,
  classes: overrideClasses = {},
  children = 'RadioList',
  tabIndex= 0,
  list,
  ...props
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<RadioListStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );

  // const [clicked, setClicked] = React.useState(false);

  // const handleChange = (event: React.ChangeEvent<HTMLButtonElement>) => {
  //   setClicked(event.target.checked);
  //   return clicked;
  // };

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend"
        classes={{
          root: classnames(classes.formLabel),
          // focused: classnames(classes.formLabel)
        }}
      >
        {list.title}
      </FormLabel>
      <FormGroup>
        {
          list.items?.map(Radio => {
            return (
              <FormControlLabel
                classes={{
                  label: classes.label,
                }} 
                value="end"
                control={
                  <MuiRadio 
                    disabled={Radio.disabled} checked={Radio.checked} tabIndex={tabIndex}
                    classes={{
                      root: classes.root,
                      checked: classnames({
                        [classes.disabledChecked]: (Radio.disabled && Radio.checked),
                        [classes.checked]: (Radio.checked && !Radio.disabled),
                      })
                    }} 
                  />
                }
                label={Radio.label}
                labelPlacement="end"
              />  
            )
          })
        }
      </FormGroup>
    </FormControl> 
  )
}

// const RadioList = forwardRef<HTMLInputElement, Omit<RadioListProps, 'innerRef'>>(
//   (props, ref) => <RadioListWithInnerRef innerRef={ref} {...props} />
// );

export default RadioList;