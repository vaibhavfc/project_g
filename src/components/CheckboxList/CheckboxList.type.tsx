import { Ref } from 'react'
import { CheckboxProps as MuiCheckboxProps, CheckboxClassKey } from '@material-ui/core/Checkbox'
export interface CheckboxListStylingProps extends Partial<Record<CheckboxClassKey, string>> {
}

export interface CheckboxListProps extends MuiCheckboxProps {
  // innerRef: Ref<HTMLButtonElement>;
  list: { title: string, 
          items: {
            label: string, 
            checked?: boolean, 
            disabled?: boolean
          }[]
        };
}
