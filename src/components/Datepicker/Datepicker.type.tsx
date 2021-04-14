// import { Ref } from 'react';
import { DatePickerProps as MuiDatepickerProps } from '@material-ui/pickers/DatePicker';

export interface DatepickerStylingProps {
}

export interface DatepickerProps extends MuiDatepickerProps {
  // innerRef: Ref<HTMLDivElement>;
  doneCallback?: () => void;
}
