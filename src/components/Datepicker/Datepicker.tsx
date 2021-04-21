/* eslint-disable max-len */
import React, {
  FC,
  useState,
} from 'react';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField as MuiTextField,
  createMuiTheme,
} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';

import classnames from 'classnames';
import { DatepickerProps } from './Datepicker.type';

import classes from './Datepicker.module.scss';

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersModal: {
      dialogRoot: {
        width: '284px',
        minWidth: '284px',
      },
    },
    //* TODO VAIBHAV
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: '#F9F9F9',
        height: '5.375rem',
        width: '17.75rem',
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        color: '#282828',
      },
    },
    // MuiPickersCalendar: {
    //   week: {
    //     '& > div': {
    //       '& > button': {
    //         width: '1.25rem',
    //         height: '1.25rem',
    //       },
    //     },
    //   },
    // },
    MuiPickersDay: {
      day: classes.test,
      daySelected: {
        backgroundColor: '#ED1164',

        '&:hover': {
          backgroundColor: '#ED1164',
        },
      },
      current: {
        color: '#ED1164',
      },
    },
    MuiPickersYear: {
      root: {
        '&:focus': {
          color: '#ED1164',
        },
      },
    },
    MuiPickersToolbarText: {
      toolbarTxt: {
        color: '#282828',
        fontFamily: 'Lato',
      },
      toolbarBtnSelected: {
        color: '#282828',
        fontFamily: 'Lato',
      },
    },
    MuiTypography: {
      body1: {
        fontFamily: 'Lato',
      },
      body2: {
        fontFamily: 'Lato',
      },
      subtitle1: {
        fontFamily: 'Lato',
      },
      h6: {
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '1rem',
        lineHeight: '22px',
        letterSpacing: '0.3px',
        color: '#282828',
      },
      h4: {
        fontFamily: 'Lato',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: '28px',
        letterSpacing: '0.16px',
        color: '#282828',
      },
      caption: {
        fontFamily: 'Lato',
      },
      colorPrimary: {
        color: '#ED1164',
        fontFamily: 'Lato',

        '&:focus': {
          color: '#ED1164',
        },
      },
    },
    MuiDialogActions: {
      root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',

        '& > .MuiButton-textPrimary:first-child': {
          width: '6.25rem',
          height: '3rem',
          color: '#97144D',
          background: '#F9F9F9',
          borderRadius: '0.5rem',
          fontFamily: 'Lato',
          textTransform: 'capitalize',

          '& > span:last-child': {
            color: 'rgba(237, 17, 100, 0.2)',
          },
        },
        '& > .MuiButton-textPrimary:last-child': {
          width: '8.725rem',
          height: '3rem',
          background: '#97144D',
          color: '#FFFFFF',
          borderRadius: '0.5rem',
          fontFamily: 'Lato',
          textTransform: 'capitalize',

          '&:after': {
            content: "'Done' !important",
            fontFamily: 'Lato',
            display: 'flex',
            justifyContent: 'center',
          },

          '& > span:first-child': {
            display: 'none',
          },
          '& > span:last-child': {
            color: '#ED1164',
          },
        },
        '& > .MuiButton-textPrimary:last-child:after': {
          content: 'Done',
        },
      },
    },
  },

});

const Datepicker: FC<DatepickerProps> = ({
  disabled,
  label,
  placeholder,
}) => {
  // const handleBlur = () => {
  //   if (inputText === '') {
  //     return false;
  //   }
  //   return true;
  // };

  // eslint-disable-next-line no-unused-vars
  // const [labelActive, setLabelActive] = useState(false);
  // const [inputText, setInputText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <FormControl className={classnames(classes.margin, classes.withoutLabel, classes.textField)}>
      <MuiTextField
        style={{ zIndex: 1 }}
        type="text"
        // value={inputText}
        // eslint-disable-next-line newline-per-chained-call
        value={selectedDate?.toISOString().substring(0, 10).split('-').reverse().join('/')}
        // value={inputText && selectedDate.toISOString().substring(0, 10).split('-').reverse().join('/')}
        // onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        //   setInputText(e.target.value);
        // }}
        // onFocus={() => setLabelActive(true)}
        // onBlur={() => setLabelActive(handleBlur)}
        variant="filled"
        disabled={disabled}
        label={label}
        placeholder={placeholder}
        data-testid="textfield-input"
        classes={{
          root: classnames(classes.root),
        }}
        FormHelperTextProps={{
          classes: {
            root: classes.helperText,
          },
        }}
        InputLabelProps={{
          classes: {
            root: classnames(classes.labelRoot, {
              // [classes.shrink]: (labelActive || selectedDate),
              [classes.shrink]: (selectedDate),
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
                onClick={() => setIsOpen(true)}
              >
                <CalendarTodayOutlinedIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ThemeProvider theme={materialTheme}>
          <KeyboardDatePicker
            className={classes.datepicker}
            open={isOpen}
            id="mui-pickers-date"
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            label="Date picker"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </FormControl>
  );
};

export default Datepicker;
