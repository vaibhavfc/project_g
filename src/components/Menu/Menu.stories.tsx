// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Menu from '.';

import { MenuProps } from './Menu.type';

export default {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    controls: {
      // disabled: true,
    },
  },
} as Meta;

const Template: Story<MenuProps> = (args) => <Menu {...args} />;

export const DefaultMenu = Template.bind({});
DefaultMenu.args = {
  items: ['Menu Item 1', 'Menu Item 2', 'Menu Item 3'],
};
