// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import InputHelper from '.';

import { InputHelperProps } from './InputHelper.type';

export default {
  title: 'Components/InputHelper',
  component: InputHelper,
  parameters: {
    controls: {
      // disabled: true,
    },
  },
} as Meta;

const Template: Story<InputHelperProps> = (args) => <InputHelper {...args} />;

export const Default = Template.bind({});
Default.args = {
  inputValues: [10000, 20000, 30000],
  prefix: '₹',
  label: 'Label',
  placeholder: 'Placeholder',
  onChange: (textVal:string) => console.log(textVal),
};
