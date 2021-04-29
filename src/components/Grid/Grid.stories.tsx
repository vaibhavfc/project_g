// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Grid from '.';

import classes from './Grid.module.scss';

import { GridProps } from './Grid.type';

export default {
  title: 'Components/Grid',
  component: Grid,
  parameters: {
    controls: {
      // disabled: true,
    },
  },
} as Meta;

const Template: Story<GridProps> = (args) => <Grid {...args} />;

export const DegaultGrid = Template.bind({});
DegaultGrid.args = {
  children: (
    <Grid container spacing={4} direction="row" classes={{ container: classes.container }}>
      <Grid item xs={12} sm={6} md={4} lg={2} xl={1}>
        <div style={{ backgroundColor: 'red' }}>Grid1</div>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2} xl={1}>
        <div style={{ backgroundColor: 'red' }}>Grid2</div>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2} xl={1}>
        <div style={{ backgroundColor: 'red' }}>Grid3</div>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2} xl={1}>
        <div style={{ backgroundColor: 'red' }}>Grid4</div>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2} xl={1}>
        <div style={{ backgroundColor: 'red' }}>Grid4</div>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2} xl={1}>
        <div style={{ backgroundColor: 'red' }}>Grid6</div>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2} xl={1}>
        <div style={{ backgroundColor: 'red' }}>Grid7</div>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2} xl={1}>
        <div style={{ backgroundColor: 'red' }}>Grid8</div>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2} xl={1}>
        <div style={{ backgroundColor: 'red' }}>Grid9</div>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2} xl={1}>
        <div style={{ backgroundColor: 'red' }}>Grid10</div>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2} xl={1}>
        <div style={{ backgroundColor: 'red' }}>Grid11</div>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2} xl={1}>
        <div style={{ backgroundColor: 'red' }}>Grid12</div>
      </Grid>
    </Grid>
  ),
};
