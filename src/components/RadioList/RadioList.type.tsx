// import { Ref } from 'react';
import { RadioProps as MuiRadioProps, RadioClassKey } from '@material-ui/core/Radio';

export interface RadioListStylingProps extends Partial<Record<RadioClassKey, string>> {
}

export interface RadioListProps extends MuiRadioProps {
  // innerRef: Ref<HTMLButtonElement>;
  list: { title: string,
          defaultValue?: any;
          items: {
            label: string,
            value: any,
            name: string,
            checked?: boolean,
            disabled?: boolean
          }[]
        };
}
