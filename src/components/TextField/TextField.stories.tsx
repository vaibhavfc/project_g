// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import TextField from '.';

import { TextFieldProps } from './TextField.type';

export default {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    controls: {
      // disabled: true,
    },
  },
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
};
