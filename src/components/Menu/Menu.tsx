import React, { FC, forwardRef, useMemo } from 'react';
import { MenuList as MuiMenuList, Paper as MuiPaper, MenuItem as MuiMenuItem } from '@material-ui/core';
// import classnames from 'classnames';
import { MenuProps, MenuStylingProps } from './Menu.type';

import classes from './Menu.module.scss';

import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';

const MenuWithInnerRef: FC<MenuProps> = ({
  // innerRef = null,
  classes: overrideClasses = {},
  items,
  // ...props
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<MenuStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );

  return (
    <MuiPaper
      classes={{
        root: mergedClasses.paperRoot,
      }}
      data-testid="menu-main"
    >
      <MuiMenuList>
        {
          items?.map((item) => (
            <MuiMenuItem
              classes={{
                root: mergedClasses.item,
              }}
              data-testid="menu-item"
            >
              {item}
            </MuiMenuItem>
          ))
        }
      </MuiMenuList>
    </MuiPaper>
  );
};

const Menu = forwardRef<HTMLDivElement, Omit<MenuProps, 'innerRef'>>(
  (props, ref) => <MenuWithInnerRef innerRef={ref} {...props} />,
);
export default Menu;
