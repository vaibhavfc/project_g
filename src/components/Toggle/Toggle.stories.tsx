// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Toggle from '.';

import { ToggleProps } from './Toggle.type';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    controls: {
      // disabled: true,
    },
  },
} as Meta;

const Template: Story<ToggleProps> = (args) => <Toggle {...args} />;

export const Selected = Template.bind({});
Selected.args = {
  buttonType: 'Selected',
  checked: true,
};

export const UnSelected = Template.bind({});
UnSelected.args = {
  buttonType: 'Unselected',
  checked: false,
};
