// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import YesNoSwitch from '.';

import { YesNoSwitchProps } from './YesNoSwitch.type';

export default {
  title: 'Components/YesNoSwitch',
  component: YesNoSwitch,
} as Meta;

const Template: Story<YesNoSwitchProps> = (args) => <YesNoSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultValue: true,
};

export const DisabledSwitch = Template.bind({});
DisabledSwitch.args = {
  defaultValue: true,
  disabled: true,
};
