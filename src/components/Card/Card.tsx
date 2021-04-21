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
// import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
// import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import classnames from 'classnames';
import { CardProps, CardStylingProps } from './Card.type';
import { YesNoSwitch, Toggle } from '..';
import { ReactComponent as CheckImgSelected } from './assets/checkSelected.svg';
import { ReactComponent as ArrowForward } from './assets/arrowForward.svg';
import { ReactComponent as CheckImgunSelected } from './assets/checkUnSelected.svg';
import { ReactComponent as ErrorOutlineIcon } from './assets/Vector.svg';

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

  const renderIcon = () => {
    if (cardType === 'selectable' && !isSelected) {
      return <CheckImgSelected />;
    } if (cardType === 'selectable' && isSelected) {
      return <CheckImgunSelected />;
    } if (cardType === 'display' && buttonType === 'icon') {
      return <ErrorOutlineIcon />;
    } if (cardType === 'clickable') {
      return <ArrowForward />;
    } if (cardType === 'display' && buttonType === 'text') {
      return <Button classes={{ root: classnames(mergedClasses.textButton) }} variant="text" disableRipple> Action </Button>;
    } if (cardType === 'display' && buttonType === 'toggle') {
      return <Toggle checked={false} />;
    } if (cardType === 'display' && buttonType === 'switch') {
      return <YesNoSwitch defaultValue={switchValue} />;
    }
    return null;
  };

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
      <Box className={mergedClasses.cardWraper} component="div">
        <Box className={classnames(mergedClasses.avatarContainer, { [mergedClasses.hide]: (cardType !== 'display' || (cardType === 'display' && assets === 'No' && type === 'single')) })}>
          <Avatar classes={{ root: classnames(mergedClasses.avatarHeader, { [mergedClasses.hide]: ((cardType === 'display' && assets === 'No') || cardType === 'selectable' || cardType === 'clickable'), [mergedClasses.avatarMetricHeader]: (type === 'metric') }) }} variant="square">
            R
          </Avatar>
        </Box>
        <Box>
          <CardHeader
            classes={{
              root: classnames(mergedClasses.header, {
                [mergedClasses.headerWithAssets]: (cardType === 'display' && assets === 'Yes'),
                [mergedClasses.cardHeader]: ((cardType === 'display' && assets === 'No')),
                [mergedClasses.cardHeaderSingle]: (cardType === 'display' && type === 'single'),
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
                      [mergedClasses.iconTextButton]: (buttonType === 'text'),
                      [mergedClasses.iconClickableButton]: (cardType === 'clickable'),
                    }),
                  }}
                  disableRipple
                  onClick={onIconCallback}
                >
                  {renderIcon()}
                </IconButton>
              )
            }
            title={title}
          />
          <CardContent
            classes={{
              root: classnames(mergedClasses.content, {
                [classes.hide]: (type === 'single'),
                [mergedClasses.contentSelectable]: (cardType === 'selectable' || cardType === 'clickable'),
              }),
            }}
          >
            <Box
              className={mergedClasses.boxLabel}
              component="div"
            >
              <Box
                className={
                  classnames(mergedClasses.caption, {
                    [mergedClasses.contentWraper2]: (assets === 'Yes'),
                    [mergedClasses.contentWraper]: (type === 'label-2'),
                  })
                }
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
                      [mergedClasses.metricContentNoAssets]: (assets === 'No'),
                    }),
                  }}
                  component="p"
                >
                  {content}
                </Typography>
              </Box>
              <Box
                className={
                  classnames(mergedClasses.contentWraper, {
                    [mergedClasses.contentWraper2]: (assets === 'Yes'),
                    [mergedClasses.hide]: (type === 'label' || type === 'extended' || type === 'single' || type === 'no-label' || type === 'metric'),
                  })
                }
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
      {type === 'extended' && cardData?.map((item) => <CardLayout data={item} />)}
    </MuiCard>
  );
};

const Card = forwardRef<HTMLDivElement, Omit<CardProps, 'innerRef'>>(
  (props, ref) => <CardWithInnerRef innerRef={ref} {...props} />,
);
export default Card;
