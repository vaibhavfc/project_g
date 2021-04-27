import React, {
  FC,
  forwardRef,
  // useEffect,
  useMemo,
} from 'react';
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
  label,
  checked = false,
  disabled,
  value,
  name,
  // ...props
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<RadioStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );

  const [selectedValue, setSelectedValue] = React.useState('');

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setClicked(event.target.checked);
  //   return clicked;
  // };

  // useEffect(() => {
  //   setSelectedValue(value);
  // }, [checked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControlLabel
      classes={{
        label: classes.label,
      }}
      control={(
        <MuiRadio
          name={name}
          id={name}
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
  );
};

const Radio = forwardRef<HTMLButtonElement, Omit<RadioProps, 'innerRef'>>(
  (props, ref) => <RadioWithInnerRef innerRef={ref} {...props} />,
);
export default Radio;
