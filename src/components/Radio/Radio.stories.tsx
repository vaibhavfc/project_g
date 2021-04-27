// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Radio from '.';

import { RadioProps } from './Radio.type';

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    controls: {
      // disabled: true,
    },
  },
} as Meta;

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const DisabledAndChecked = Template.bind({});
DisabledAndChecked.args = {
  checked: true,
  disabled: true,
  value: 'radio',
};

export const DisabledAndUnChecked = Template.bind({});
DisabledAndUnChecked.args = {
  disabled: true,
  value: 'radio',
};

export const DefaultWithLabel = Template.bind({});
DefaultWithLabel.args = {
  label: 'Radio Item',
  value: 'radio',
};

export const DisabledAndCheckedWithLabel = Template.bind({});
DisabledAndCheckedWithLabel.args = {
  label: 'Radio Item',
  checked: true,
  disabled: true,
  value: 'radio',
};

export const DisabledAndUnCheckedWithLabel = Template.bind({});
DisabledAndUnCheckedWithLabel.args = {
  label: 'Radio Item',
  disabled: true,
  value: 'radio',
};
