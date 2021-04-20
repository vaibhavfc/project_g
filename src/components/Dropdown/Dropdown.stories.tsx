// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Dropdown from '.';

import { DropdownProps } from './Dropdown.type';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    controls: {
    },
  },
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'filled',
  label: 'Label',
  error: false,
  placeholder: 'Placeholder text',
  type: 'text',
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
