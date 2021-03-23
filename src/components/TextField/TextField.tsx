import React, { FC, useMemo } from 'react';
import {
  FormControl,
  InputAdornment,
  TextField as MuiTextField,
} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';

import classnames from 'classnames';
import { TextFieldProps, TextFieldStylingProps } from './TextField.type';

import classes from './TextField.module.scss';
import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';

const TextField: FC<TextFieldProps> = ({
  classes: overrideClasses = {},
  variant,
  label,
  error,
  disabled,
  type,
  helperText,
  start,
  end,
  placeholder,
  suffix,
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<TextFieldStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );

  const handleBlur = () => {
    if (inputText === '') {
      return false;
    }
    return true;
  };

  const [labelActive, setLabelActive] = React.useState(false);
  const [inputText, setInputText] = React.useState('');

  return (
    <FormControl className={classnames(classes.margin, classes.withoutLabel, classes.textField)}>
      <MuiTextField
        type={type}
        value={inputText}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
          setInputText(e.target.value);
        }}
        onFocus={() => setLabelActive(true)}
        onBlur={() => setLabelActive(handleBlur)}
        error={error}
        variant={variant}
        label={label}
        disabled={disabled}
        helperText={(!error) ? helperText : 'Error'}
        classes={{
          root: classnames(mergedClasses.root),
        }}
        placeholder={placeholder}
        InputLabelProps={{
          shrink: labelActive,
          classes: {
            root: classnames(classes.labelRoot, {
              [classes.labelRootError]: (error),
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
                [classes.suffix]: suffix,
                [classes.disabled]: disabled,
              },
            ),
            disabled: classes.inputRootDisabled,
          },
          startAdornment: (
            <InputAdornment
              classes={{
                root: classnames(
                  classes.inputAdornment,
                  { [classes.displayAdornment]: (!labelActive && inputText === '') },
                ),
              }}
              position="start"
            >
              {start}
            </InputAdornment>
          ),
          endAdornment: (
            <>
              <InputAdornment
                position="end"
                classes={{
                  root: classnames(
                    classes.inputAdornmentSuffix,
                    { [classes.displayAdornment]: (!labelActive && inputText === '') },
                  ),
                }}
              >
                {suffix}
              </InputAdornment>
              <InputAdornment
                position="end"
                classes={{ root: classes.inputAdornment }}
              >
                {
                  (!end && error) ? (
                    <CancelIcon className={classes.errorIcon} />
                  ) : (end)
                }
              </InputAdornment>
            </>
          ),
        }}
      />
    </FormControl>
  );
};

export default TextField;
