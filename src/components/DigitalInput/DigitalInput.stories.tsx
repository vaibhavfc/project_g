import { Story, Meta } from '@storybook/react/types-6-0';

import DigitalInput from '.';

import { DigitalInputProps } from './DigitalInput.type';

export default {
  title: 'Components/DigitalInput',
  component: DigitalInput,
  parameters: {
    controls: {
    },
  },
} as Meta;

const Template: Story<DigitalInputProps> = (args) => <DigitalInput {...args} />;

export const DefaultDigitalInput = Template.bind({});
DefaultDigitalInput.args = {
  size: 'medium',
  length: 6,
};

export const SmallDigitalInput = Template.bind({});
SmallDigitalInput.args = {
  size: 'small',
  length: 6,
};

export const DisabledDigitalInput = Template.bind({});
DisabledDigitalInput.args = {
  size: 'small',
  disabled: true,
  length: 6,
  placeholder: '123456',
};

export const ErrorDigitalInput = Template.bind({});
ErrorDigitalInput.args = {
  size: 'small',
  error: true,
  length: 6,
  placeholder: '123456',
};
