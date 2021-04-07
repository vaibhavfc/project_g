// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import RadioList from '.';

import { RadioListProps } from './RadioList.type';

export default {
  title: 'Components/RadioList',
  component: RadioList,
  parameters: {
    controls: {
      // disabled: true,
    },
  },
} as Meta;

const Template: Story<RadioListProps> = (args) => <RadioList {...args} />;

export const Default = Template.bind({});
Default.args = {
  list: {
    title: 'Radio List Heading',
    items: [
      { label: 'Default' },
      { label: 'Checked', checked: true },
      { label: 'Disabled', disabled: true },
      { label: 'Checked & Disabled', disabled: true, checked: true },
    ],
  },
};
