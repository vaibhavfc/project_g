import { Ref } from 'react';
import { AccordionProps as MuiAccordionProps, AccordionClassKey } from '@material-ui/core/Accordion';
import { AccordionDetailsProps as MuiAccordionDetailsProps } from '@material-ui/core/AccordionDetails';

export interface AccordionStylingProps extends Partial<Record<AccordionClassKey, string>> {
  title?: string;
  description?: string;
  arrow?: string;
  accordion?: string;
}

export interface AccordionProps extends MuiAccordionProps {
  innerRef: Ref<HTMLDivElement>;
  items: {
    title: string;
    description: string;
  }[];
  doneCallback?: () => void;
}

export interface AccordionItemProps extends MuiAccordionDetailsProps {
  title: string;
  description: string;
}
