import React, { FC, useMemo, useState } from 'react';

import { ToggleButton as MuiToggleButton, ToggleButtonGroup as MuiToggleButtonGroup } from '@material-ui/lab';
import { Box } from '@material-ui/core';

import classnames from 'classnames';
import { YesNoSwitchProps, YesNoSwitchStylingProps } from './YesNoSwitch.type';

import classes from './YesNoSwitch.module.scss';

import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';

const YesNoSwitch: FC<YesNoSwitchProps> = ({
  classes: overrideClasses = {},
  disabled = false,
  tabIndex = 0,
  defaultValue,
  ...props
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<YesNoSwitchStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );

  const [select1, setSelect1] = useState(true);
  const [select2, setSelect2] = useState(false);

  const values = [true, false];
  const labels = ['yes', 'no'];

  const handleToggle1 = () => {
    setSelect2(false);
    setSelect1(true);
  };

  const handleToggle2 = () => {
    setSelect1(false);
    setSelect2(true);
  };

  const btnClasses1 = classnames({
    [mergedClasses.selected]: select1 && !disabled,
    [mergedClasses.unselected]: !select1 && !disabled,
    [mergedClasses.disabledBtnSelected]: (disabled && values[0] === defaultValue),
    [mergedClasses.disabledBtnUnselected]: (disabled && values[0] !== defaultValue),
  });

  const btnClasses2 = classnames({
    [mergedClasses.selected]: select2,
    [mergedClasses.unselected]: !select2,
    [mergedClasses.disabledBtnSelected]: (disabled && values[1] === defaultValue),
    [mergedClasses.disabledBtnUnselected]: (disabled && values[1] !== defaultValue),
  });

  return (
    <MuiToggleButtonGroup
      tabIndex={tabIndex}
      classes={{
        root: classnames(mergedClasses.root, {
          [mergedClasses.disabled]: disabled,
        }),
      }}
      {...props}
    >
      <MuiToggleButton
        value={values[0]}
        disableRipple
        selected={select1}
        onClick={handleToggle1}
        classes={{
          root: classnames(mergedClasses.rootBtn),
          disabled: classnames({ [classes.disabled]: disabled }),
        }}
      >
        <Box
          component="span"
          className={btnClasses1}
          py="0.4375rem"
          px="0.25rem"
          borderRadius="0.25rem"
          display="flex"
          justifyContent="center"
        >
          {labels[0]}
        </Box>
      </MuiToggleButton>
      <MuiToggleButton
        value={values[1]}
        disableRipple
        selected={select2}
        onClick={handleToggle2}
        classes={{
          root: mergedClasses.rootBtn,
          disabled: classnames({ [classes.disabled]: disabled }),
        }}
      >
        <Box
          component="span"
          className={btnClasses2}
          py="0.4375rem"
          px="0.4rem"
          borderRadius="0.25rem"
          display="flex"
          justifyContent="center"
        >
          {labels[1]}
        </Box>
      </MuiToggleButton>
    </MuiToggleButtonGroup>
  );
};

export default YesNoSwitch;
