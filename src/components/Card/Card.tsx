import React, {
  FC,
  forwardRef,
  useMemo,
  useState,
} from 'react';
import {
  Box,
  Button,
  Card as MuiCard,
  CardHeader,
  IconButton,
  Avatar,
} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import classnames from 'classnames';
import { CardProps, CardStylingProps } from './Card.type';
import { YesNoSwitch, Toggle } from '..';
// import { ReactComponent as CheckImg } from './assets/check.svg';
import { ReactComponent as ArrowForward } from './assets/arrow_forward.svg';

import classes from './Card.module.scss';

import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';
import CardLayout from './CardContent';

const CardWithInnerRef: FC<CardProps> = ({
  // innerRef = null,
  classes: overrideClasses = {},
  // children,
  // variant = 'default',
  // link,
  title = 'Heading',
  subheader,
  content,
  content2,
  cardType = 'default',
  cardData,
  subheader2,
  buttonType,
  switchValue,
  type,
  assets = 'No',
  onIconCallback = () => undefined,
  // ...props
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<CardStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );

  const [isSelected, setIsSelected] = useState(false);
  // const handleSize = (asInput: string) => {
  //   if (asInput === 'status') {
  //     return 'medium';
  //   }
  //   return 'small';
  // };

  return (
    <MuiCard
      onClick={() => { setIsSelected(!isSelected); }}
      role="button"
      classes={{
        root: classnames(mergedClasses.root, {
          [mergedClasses.clickable]: (cardType === 'clickable'),
          [mergedClasses.display]: (cardType === 'display'),
          [mergedClasses.selectedCard]: (cardType === 'selectable' && !isSelected),
          [mergedClasses.unSelectedCard]: (cardType === 'selectable' && isSelected),
        }),
      }}
    >
      <Box classes={{ root: classnames(mergedClasses.cardWraper) }} component="div">
        <Box classes={{ root: classnames(mergedClasses.avatarContainer, { [mergedClasses.hide]: (cardType !== 'display' || (cardType === 'display' && type === 'single')) }) }}>
          <Avatar classes={{ root: classnames(mergedClasses.avatarHeader, { [mergedClasses.hide]: ((cardType === 'display' && assets === 'No') || cardType === 'selectable' || cardType === 'clickable'), [mergedClasses.avatarMetricHeader]: (type === 'metric') }) }} variant="square">
            R
          </Avatar>
        </Box>
        <Box>
          <CardHeader
            classes={{
              root: classnames(mergedClasses.header, {
                [mergedClasses.headerWithAssets]: (cardType === 'display' && assets === 'Yes'),
              }),
              title: classnames(mergedClasses.title, {
                [mergedClasses.selectedTitle]: (cardType === 'selectable' && !isSelected),
                [mergedClasses.unSelectedTitle]: (cardType === 'selectable' && isSelected),
                [mergedClasses.headerTitle]: (cardType === 'display' && buttonType === 'text' && type !== 'metric'),
                [mergedClasses.metricTitle]: (cardType === 'display' && type === 'metric'),
              }),
              subheader: classnames(mergedClasses.subheader, {
                [classes.hide]: (type === 'single' || type === 'no-label' || type === 'metric'),
              }),
              action: classnames(mergedClasses.actionContainer, {
                [mergedClasses.actionTextContainer]: (cardType === 'display' && buttonType === 'text'),
              }),
            }}
            action={
              (
                <IconButton
                  classes={{
                    root: classnames(mergedClasses.iconButton, {
                      [mergedClasses.iconButton1]: ((cardType === 'display' && buttonType === 'switch') || (cardType === 'display' && buttonType === 'toggle')),
                    }),
                  }}
                  disableRipple
                  onClick={onIconCallback}
                >
                  { cardType === 'selectable' && <CheckCircleRoundedIcon classes={{ root: classnames(mergedClasses.selectedIcon, { [mergedClasses.unSelectedIcon]: (cardType === 'selected' || isSelected) }) }} /> }
                  { cardType === 'display' && buttonType === 'icon' && <ErrorOutlineIcon classes={{ root: classnames(mergedClasses.selectedIcon) }} /> }
                  { cardType === 'clickable' && <ArrowForward /> }
                  { cardType === 'display' && buttonType === 'text' && <Button classes={{ root: classnames(mergedClasses.textButton) }} variant="text" disableRipple> Action </Button> }
                  { cardType === 'display' && buttonType === 'toggle' && <Toggle buttonType="Selected" edge="end" onFocusVisible={() => {}} type="pressed" /> }
                  { cardType === 'display' && buttonType === 'switch' && <YesNoSwitch defaultValue={switchValue} /> }
                </IconButton>
              )
            }
            title={title}
          />
          <CardContent
            classes={{
              root: classnames(mergedClasses.content, {
                [classes.hide]: (type === 'single'),
              }),
            }}
          >
            <Box
              classes={{
                root: classnames(mergedClasses.boxLabel),
              }}
              component="div"
            >
              <Box
                classes={{
                  root: classnames(mergedClasses.caption, {
                    [mergedClasses.contentWraper2]: (assets === 'Yes'),
                    [mergedClasses.contentWraper]: (type === 'label-2'),
                  }),
                }}
                component="div"
              >
                <Typography
                  classes={{
                    root: classnames(mergedClasses.subheader, {
                      [mergedClasses.subheader1]: (assets === 'Yes'),
                      [classes.hide]: (type === 'single' || type === 'no-label' || type === 'metric'),
                    }),
                  }}
                  component="h5"
                >
                  {subheader}
                </Typography>
                <Typography
                  classes={{
                    root: classnames(mergedClasses.metricContent, {
                      [mergedClasses.captionWraper]: (assets === 'Yes'),
                      [mergedClasses.captionWraper1]: (type === 'metric'),
                      [mergedClasses.caption]: (type !== 'metric'),
                    }),
                  }}
                  component="p"
                >
                  {content}
                </Typography>
              </Box>
              <Box
                classes={{
                  root: classnames(mergedClasses.contentWraper, {
                    [mergedClasses.contentWraper2]: (assets === 'Yes'),
                    [mergedClasses.hide]: (type === 'label' || type === 'extended' || type === 'single' || type === 'no-label' || type === 'metric'),
                  }),
                }}
                component="div"
              >
                <Typography
                  classes={{
                    root: classnames(mergedClasses.subheader, {
                      [mergedClasses.subheader1]: (assets === 'Yes'),
                      [mergedClasses.hide]: (type === 'label' || type === 'extended' || type === 'single' || type === 'no-label' || type === 'metric'),
                    }),
                  }}
                  component="h5"
                >
                  {subheader2}
                </Typography>
                <Typography
                  classes={{
                    root: classnames(mergedClasses.caption, {
                      [mergedClasses.captionWraper]: (assets === 'Yes'),
                      [mergedClasses.hide]: (type === 'label' || type === 'extended' || type === 'single' || type === 'no-label'),
                    }),
                  }}
                  component="p"
                >
                  {content2}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Box>
      <Divider classes={{ root: classnames(mergedClasses.divider, { [classes.hide]: (type === 'single' || type === 'label' || type === 'no-label' || type === 'label-2' || type === 'metric') }) }} />
      {type === 'extended' && cardData?.map((item) => <CardLayout key={item} data={item} />)}
    </MuiCard>
  );
};

const Card = forwardRef<HTMLDivElement, Omit<CardProps, 'innerRef'>>(
  (props, ref) => <CardWithInnerRef innerRef={ref} {...props} />,
);
export default Card;
