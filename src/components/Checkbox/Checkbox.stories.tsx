// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Checkbox from '.';

import { CheckboxProps } from './Checkbox.type';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    controls: {
      // disabled: true,
    }
  }
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />

export const Default = Template.bind({});
Default.args = {
}

export const DisabledAndChecked = Template.bind({});
DisabledAndChecked.args = {
  checked: true,
  disabled: true
}

export const DisabledAndUnChecked = Template.bind({});
DisabledAndUnChecked.args = {
  disabled: true
}

export const DefaultWithLabel = Template.bind({});
DefaultWithLabel.args = {
  label: 'Checkbox Item'
}

export const DisabledAndCheckedWithLabel = Template.bind({});
DisabledAndCheckedWithLabel.args = {
  label: 'Checkbox Item',
  checked: true,
  disabled: true
}

export const DisabledAndUnCheckedWithLabel = Template.bind({});
DisabledAndUnCheckedWithLabel.args = {
  label: 'Checkbox Item',
  disabled: true
}
