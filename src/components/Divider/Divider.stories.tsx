// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Divider from '.';

import { DividerProps } from './Divider.type';

export default {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    controls: {
      // disabled: true,
    }
  }
} as Meta;

const Template: Story<DividerProps> = (args) => <Divider {...args} />

export const HorizontalSmall = Template.bind({});
HorizontalSmall.args = {
  orientation: 'horizontal',
  size: 'small'
}

export const HorizontalLarge = Template.bind({});
HorizontalLarge.args = {
  orientation: 'horizontal',
  size: 'large'
}

export const VerticalSmall = Template.bind({});
VerticalSmall.args = {
  orientation: 'vertical',
  size: 'small'
}

export const VerticalLarge = Template.bind({});
VerticalLarge.args = {
  orientation: 'vertical',
  size: 'large'
}
