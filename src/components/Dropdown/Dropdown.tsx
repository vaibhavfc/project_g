import React, { FC, useMemo } from 'react';
import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField as MuiTextField,
  MenuList as MuiMenuList,
  Paper as MuiPaper,
  MenuItem as MuiMenuItem,
} from '@material-ui/core';

import classnames from 'classnames';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

// import { Menu } from '..';

import { DropdownProps, DropdownStylingProps } from './Dropdown.type';

import classes from './Dropdown.module.scss';
import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';

const Dropdown: FC<DropdownProps> = ({
  classes: overrideClasses = {},
  variant,
  error,
  disabled,
  label,
  placeholder,
  type,
  helperText,
  items,
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<DropdownStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );

  const handleBlur = () => {
    if (inputText === '') {
      return false;
    }
    return true;
  };

  const [labelActive, setLabelActive] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);
  const [inputText, setInputText] = React.useState('');

  const handleSelection = (itemValue) => {
    setInputText(itemValue);
    setLabelActive(true);
    setToggle(!toggle);
  };

  return (
    <FormControl className={classnames(classes.margin, classes.withoutLabel, classes.textField)}>
      <MuiTextField
        type={type}
        value={inputText}
        // onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        //   setInputText(e.target.value);
        // }}
        onFocus={() => setLabelActive(true)}
        onBlur={() => setLabelActive(handleBlur)}
        error={error}
        variant={variant}
        disabled={disabled}
        label={label}
        placeholder={placeholder}
        helperText={(!error) ? helperText : 'Error'}
        data-testid="dropdown-main"
        classes={{
          root: classnames(mergedClasses.root),
        }}
        FormHelperTextProps={{
          classes: {
            root: classes.helperText,
          },
        }}
        InputLabelProps={{
          shrink: labelActive,
          classes: {
            root: classnames(classes.labelRoot, {
              [classes.labelRootError]: (error && labelActive),
              [classes.shrink]: (labelActive),
            }),
            focused: classes.labelRootFocused,
            disabled: classnames(classes.labelRootDisabled),
          },
        }}
        InputProps={{
          classes: {
            root: classnames(
              classes.inputRoot,
              {
                [classes.disabled]: disabled,
                [classes.error]: error,
              },
            ),
            disabled: classes.inputRootDisabled,
            input: classnames(classes.inputStart),
          },
          endAdornment: (
            <InputAdornment
              position="end"
              classes={{ root: classes.inputAdornment }}
            >
              <IconButton
                className={classes.IconButton}
                disableRipple
                edge="end"
                aria-label="Toggle Calendar"
                onClick={() => setToggle(!toggle)}
              >
                {!toggle ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <div
        className={toggle ? classes.show : classes.hide}
      >
        <MuiPaper
          classes={{
            root: mergedClasses.paperRoot,
          }}
          data-testid="menu-main"
        >
          <MuiMenuList>
            {
              items?.map((item) => (
                <MuiMenuItem
                  onClick={() => handleSelection(item)}
                  classes={{
                    root: mergedClasses.item,
                  }}
                  data-testid="menu-item"
                  value={item}
                >
                  {item}
                </MuiMenuItem>
              ))
            }
          </MuiMenuList>
        </MuiPaper>
      </div>
    </FormControl>
  );
};

export default Dropdown;
