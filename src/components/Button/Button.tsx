
import React, { FC, forwardRef, useMemo } from 'react'
import { ButtonProps, ButtonStylingProps } from './Button.type'
import { Button as MuiButton } from "@material-ui/core"

import classes from './Button.module.scss'
import rippleClasses from './ButtonTouchRipple.module.scss';

import classnames from 'classnames';

import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';

import AddIcon from '@material-ui/icons/Add';

const ButtonWithInnerRef: FC<ButtonProps> = ({
    innerRef = null,
    classes: overrideClasses = {},
    children,
    disabled = false,
    size = 'medium',
    color = "primary",
    TouchRippleProps = {},
    withIcon = false,
    hasIconOnly = false,
    isFlushButton = false,
    doneCallback = () => undefined,
    ...props
}) => {
    const mergedClasses = useMemo(
        () => mergeClassesObjects<ButtonStylingProps>(classes, overrideClasses),
        [overrideClasses],
    );
    return (
        <MuiButton
            classes={{
                root: classnames(mergedClasses.root, { [classes.flashButton]: isFlushButton && color === "primary" && !hasIconOnly && !withIcon }),
                label: classnames(mergedClasses.label, { [classes.label_secondary]: color === "secondary", [classes.label_only_text]: !hasIconOnly, [classes.label_icon_medium]: hasIconOnly && size === "medium", [classes.label_icon_large]: hasIconOnly && size === "large", [classes.label_icon_small]: hasIconOnly && size === "small" }),
                endIcon: classnames({ [classes.endIcon]: hasIconOnly }),
                sizeSmall: mergedClasses.sizeSmall,
                sizeLarge: mergedClasses.sizeLarge,
                outlined: classnames(mergedClasses.outlined),
                outlinedSecondary: mergedClasses.outlinedSecondary,
                iconSizeSmall: mergedClasses.iconSizeSmall,
                iconSizeMedium: mergedClasses.iconSizeMedium,
                iconSizeLarge: mergedClasses.iconSizeLarge

            }}
            TouchRippleProps={{ classes: rippleClasses, ...TouchRippleProps }}
            variant={'outlined'}
            size={size}
            color={color}
            disabled={disabled}
            endIcon={(withIcon || hasIconOnly) && <AddIcon />}
        >
            { !hasIconOnly && children}
        </MuiButton>)
}

const Button = forwardRef<HTMLButtonElement, Omit<ButtonProps, 'innerRef'>>(
    (props, ref) => <ButtonWithInnerRef innerRef={ref} {...props} />
);
export default Button;