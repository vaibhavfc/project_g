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
  items: [
    {
      title: 'Menu Item 1',
      value: 1,
    },
    {
      title: 'Menu Item 2',
      value: 2,
    },
    {
      title: 'Menu Item 3',
      value: 3,
    },
  ],
};
