// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import RadioList from '.';

import { RadioListProps } from './RadioList.type';

export default {
  title: 'Components/RadioList',
  component: RadioList,
  parameters: {
    controls: {
    },
  },
} as Meta;

const Template: Story<RadioListProps> = (args) => <RadioList {...args} />;

export const Default1 = Template.bind({});
Default1.args = {
  list: {
    title: 'Radio List Heading',
    items: [
      { label: 'radio-1', value: '1', name: 'radio' },
      { label: 'radio-2', value: '2', name: 'radio' },
      { label: 'radio-3', value: '3', name: 'radio' },
      { label: 'radio-4', value: '4', name: 'radio' },
    ],
  },
};

export const Default2 = Template.bind({});
Default2.args = {
  list: {
    title: 'Radio List Heading',
    defaultValue: '2',
    items: [
      { label: 'radio-1', value: '1', name: 'radio' },
      { label: 'radio-2', value: '2', name: 'radio' },
      { label: 'radio-3', value: '3', name: 'radio' },
      { label: 'radio-4', value: '4', name: 'radio' },
    ],
  },
};
