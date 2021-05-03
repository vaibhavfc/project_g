/* eslint-disable react/self-closing-comp */
import { FC, forwardRef } from 'react';
import { Grid as MuiGrid } from '@material-ui/core';
// import classNames from 'classnames';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { GridProps } from './Grid.type';
// import classes from './Grid.module.scss';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 600,
      lg: 960,
      xl: 1440,
    },
  },
});

const GridWithInnerRef: FC<GridProps> = ({
  // innerRef = null,
  children,
  // spacing = 2,
  ...props
}) => (
  <MuiThemeProvider theme={theme}>
    <MuiGrid
      // classes={{
      //   root: classes.sidemargin,
      // }}
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
