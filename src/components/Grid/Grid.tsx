/* eslint-disable react/self-closing-comp */
import { FC, forwardRef } from 'react';
import { Grid as MuiGrid } from '@material-ui/core';
import classNames from 'classnames';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { GridProps } from './Grid.type';
import classes from './Grid.module.scss';

const theme = createMuiTheme({
  breakpoints: {
    // Define custom breakpoint values.
    // These will apply to Material-UI components that use responsive
    // breakpoints, such as `Grid` and `Hidden`. You can also use the
    // theme breakpoint functions `up`, `down`, and `between` to create
    // media queries for these breakpoints
    values: {
      xs: 320,
      sm: 600,
      md: 960,
      lg: 1440,
      xl: 1920,
    },
  },
});

const GridWithInnerRef: FC<GridProps> = ({
  // innerRef = null,
  children,
  spacing = 2,
  ...props
}) => (
  <MuiThemeProvider theme={theme}>
    <MuiGrid
      className={
        classNames({
          [classes.spacing]: spacing === 2,
          [classes.spacingmd]: spacing === 3,
        })
      }
      {...props}
    >
      {children}
    </MuiGrid>
  </MuiThemeProvider>
);

const Grid = forwardRef<HTMLDivElement, Omit<GridProps, 'innerRef'>>(
  (props, ref) => <GridWithInnerRef innerRef={ref} {...props} />,
);

export default Grid;
