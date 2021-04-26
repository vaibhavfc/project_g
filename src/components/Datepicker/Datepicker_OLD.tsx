import 'date-fns';
import React, { FC, forwardRef, useState } from 'react';
import { KeyboardDatePicker as MuiDatepicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';

// import classnames from 'classnames';
import { DatepickerProps } from './Datepicker.type';

// import classes from './Datepicker.module.scss';

// import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';

const DatepickerWithInnerRef: FC<DatepickerProps> = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date('2014-08-18T21:11:54'),
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <MuiDatepicker
        margin="normal"
        id="date-picker-dialog"
        label="Date picker dialog"
        format="MM/dd/yyyy"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

const Datepicker = forwardRef<HTMLDivElement, Omit<DatepickerProps, 'innerRef'>>(
  (props, ref) => <DatepickerWithInnerRef innerRef={ref} {...props} />,
);
export default Datepicker;
