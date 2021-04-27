// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import CheckboxList from '.';

import { CheckboxListProps } from './CheckboxList.type';

export default {
  title: 'Components/CheckboxList',
  component: CheckboxList,
  parameters: {
    controls: {
      // disabled: true,
    },
  },
} as Meta;

const Template: Story<CheckboxListProps> = (args) => <CheckboxList {...args} />;

export const Default = Template.bind({});
Default.args = {
  list: {
    title: 'Checkbox List Heading',
    items: [
      { label: 'checkbox-1', name: 'checkbox', value: '1' },
      { label: 'checkbox-2', name: 'checkbox', value: '2' },
      { label: 'checkbox-3', name: 'checkbox', value: '3' },
      { label: 'checkbox-4', name: 'checkbox', value: '4' },
    ],
  },
};
