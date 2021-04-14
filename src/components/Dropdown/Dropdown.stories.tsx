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

export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = {
  label: 'Label',
  placeholder: 'Placeholder text',
  helperText: 'Helper Text',
};

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
  label: 'Label',
  disabled: true,
};
