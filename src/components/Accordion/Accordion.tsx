/* eslint-disable max-len */
import React, { FC, forwardRef, useMemo } from 'react';

// import classnames from 'classnames';

import { AccordionProps, AccordionStylingProps } from './Accordion.type';

import AccordionItem from './components/AccordionItem';

import classes from './Accordion.module.scss';
import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';

const AccordionWithInnerRef: FC<AccordionProps> = ({
  classes: overrideClasses = {},
  items,
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<AccordionStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );

  return (
    <div className={mergedClasses.accordion}>
      {
        items?.map(({ title, description }) => <AccordionItem title={title} description={description} />)
      }
    </div>
  );
};

const Accordion = forwardRef<HTMLDivElement, Omit<AccordionProps, 'innerRef'>>(
  (props, ref) => <AccordionWithInnerRef innerRef={ref} {...props} />,
);
export default Accordion;
