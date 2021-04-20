/* eslint-disable quotes */
import React, { FC, useState } from 'react';
import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  Typography as MuiTypography,
  AccordionSummary as MuiAccordionSummary,
} from '@material-ui/core';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';

// import classnames from 'classnames';

import { AccordionItemProps } from '../Accordion.type';

import classes from '../Accordion.module.scss';

const AccordionItem: FC<AccordionItemProps> = ({
  title,
  description,
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <MuiAccordion
      classes={{
        root: classes.root,
        expanded: classes.expanded,
      }}
    >
      <MuiAccordionSummary
        classes={{
          root: classes.accordionSummaryRoot,
          content: classes.accordionSummaryContent,
        }}
        className={classes.title}
        aria-controls="panel1a-content"
        id="panel1a-header"
        onClick={() => setToggle(!toggle)}
      >
        <MuiTypography className={classes}>{title}</MuiTypography>
        <div className={classes.arrow}>
          {toggle ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />}
        </div>
      </MuiAccordionSummary>
      <MuiAccordionDetails className={classes.description}>
        <MuiTypography>{description}</MuiTypography>
      </MuiAccordionDetails>
    </MuiAccordion>
  );
};

export default AccordionItem;
