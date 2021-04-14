/* eslint-disable react/self-closing-comp */
import React, { FC, forwardRef, useMemo } from 'react';
import { Button as MuiButton } from '@material-ui/core';
import classnames from 'classnames';
import AddIcon from '@material-ui/icons/Add';
import { ButtonProps, ButtonStylingProps } from './Button.type';

import classes from './Button.module.scss';
import rippleClasses from './ButtonTouchRipple.module.scss';

import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';

const ButtonWithInnerRef: FC<ButtonProps> = ({
  innerRef = null,
  classes: overrideClasses = {},
  children,
  disabled,
  size = 'medium',
  color = 'primary',
  TouchRippleProps = {},
  withIcon = false,
  hasIconOnly = false,
  isFlushButton = false,
  textButton = false,
  progressButton = false,
  progressValue,
  variant = 'text',
  ...props
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<ButtonStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );
  return (
    <MuiButton
      ref={innerRef}
      disableFocusRipple
      disableRipple={textButton || progressButton}
      variant={variant}
      classes={{
        root: classnames(mergedClasses.root, {
          [mergedClasses.secondary]: (color === 'secondary'),
          [mergedClasses.textBtn]: (textButton && !withIcon && !hasIconOnly),
          [mergedClasses.flushButton]: isFlushButton && color === 'primary' && !withIcon,
        }),
        label: classnames({
          [mergedClasses.label]: !textButton,
          [mergedClasses.label_large]: !hasIconOnly && size === 'large' && color === 'primary' && !textButton,
          [mergedClasses.label_medium]: !hasIconOnly && size === 'medium' && color === 'primary' && !textButton,
          [mergedClasses.label_small]: !hasIconOnly && size === 'small' && color === 'primary' && !textButton,
          [mergedClasses.label_secondary_large]: !hasIconOnly && size === 'large' && color === 'secondary',
          [mergedClasses.label_secondary_medium]: !hasIconOnly && size === 'medium' && color === 'secondary',
          [mergedClasses.label_secondary_small]: !hasIconOnly && size === 'small' && color === 'secondary',
          [mergedClasses.label_icon_large]: hasIconOnly && size === 'large' && color === 'primary',
          [mergedClasses.label_icon_medium]: hasIconOnly && size === 'medium' && color === 'primary',
          [mergedClasses.label_icon_small]: hasIconOnly && size === 'small' && color === 'primary',
          [mergedClasses.label_icon_large_secondary]: hasIconOnly && size === 'large' && color === 'secondary',
          [mergedClasses.label_icon_medium_secondary]: hasIconOnly && size === 'medium' && color === 'secondary',
          [mergedClasses.label_icon_small_secondary]: hasIconOnly && size === 'small' && color === 'secondary',
          [mergedClasses.label_disabled]: disabled && color === 'secondary',
        }),
        endIcon: classnames({ [mergedClasses.endIcon]: hasIconOnly }),
        sizeSmall: mergedClasses.sizeSmall,
        sizeLarge: mergedClasses.sizeLarge,
        outlinedSecondary: mergedClasses.outlinedSecondary,
        iconSizeSmall: classnames(mergedClasses.iconSizeSmall, {
          [mergedClasses.onlyIconSmall]: hasIconOnly,
        }),
        iconSizeMedium: classnames(mergedClasses.iconSizeMedium, {
          [mergedClasses.onlyIconMedium]: hasIconOnly,
        }),
        iconSizeLarge: classnames(mergedClasses.iconSizeLarge, {
          [mergedClasses.onlyIconLarge]: hasIconOnly,
        }),
      }}
      TouchRippleProps={{ classes: rippleClasses, ...TouchRippleProps }}
      size={size}
      color={color}
      disabled={disabled}
      endIcon={(withIcon || hasIconOnly) && <AddIcon />}
      {...props}
    >
      <div>{ !hasIconOnly && children}</div>
      <div
        style={{
          width: `${(progressValue <= 3) ? 0 : progressValue}%`,
          borderRadius: `0.5rem ${(progressValue >= 95 && !isFlushButton) ? '0.5rem' : 0} ${(progressValue >= 95 && !isFlushButton) ? '0.5rem' : 0} 0.5rem`,
        }}
        // style={{ width: `${progressValue}%` }}
        className={
          classnames({
            [classes.progress]: true,
            [classes.progPrimary]: (color === 'primary' && progressButton),
            [classes.progSecondary]: (color === 'secondary' && progressButton),
          })
        }
      >
      </div>
    </MuiButton>
  );
};

const Button = forwardRef<HTMLButtonElement, Omit<ButtonProps, 'innerRef'>>(
  (props, ref) => <ButtonWithInnerRef innerRef={ref} {...props} />,
);
export default Button;
