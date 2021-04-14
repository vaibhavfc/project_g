import React, { FC, useMemo, useState } from 'react';
import classnames from 'classnames';

import { MenuItem } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { TextField } from '..';

import { DropdownProps, DropdownStylingProps } from './Dropdown.type';

import classes from './Dropdown.module.scss';
import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';

const Dropdown: FC<DropdownProps> = ({
  classes: overrideClasses = {},
  helperText,
  disabled,
}) => {
  // eslint-disable-next-line no-unused-vars
  const mergedClasses = useMemo(
    () => mergeClassesObjects<DropdownStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );

  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

  const [toggle, setToggle]: any = useState(false);
  const [currency, setCurrency] = useState('EUR');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  // const handleBlur = () => {
  //   if (inputText === '') {
  //     return false;
  //   }
  //   return true;
  // };

  // const [labelActive, setLabelActive] = React.useState(false);
  // const [inputText, setInputText] = React.useState('');

  return (
    <>
      <TextField
        onKeyPress={() => setToggle(!toggle)}
        onClick={() => setToggle(!toggle)}
        tabIndex={0}
        role="button"
        type="text"
        variant="filled"
        id="standard-select-currency"
        select
        label="Select"
        value={currency}
        onChange={handleChange}
        helperText={helperText}
        adornmentEnd={<ArrowDropDownIcon />}
        disabled={disabled}
        className={classes.root}
      />
      <div
        className={
          classnames({
            [classes.hide]: (!toggle),
            [classes.unhide]: (toggle),
          })
        }
      >
        {
          currencies?.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))
        }
      </div>
    </>
  );
};

export default Dropdown;
