// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Chip from '.';

import { ChipProps } from './Chip.type';

export default {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    controls: {
      // disabled: true,
    },
  },
} as Meta;

const Template: Story<ChipProps> = (args) => <Chip {...args} />;

export const DefaultStatusChip = Template.bind({});
DefaultStatusChip.args = {
  label: 'Default',
  chipType: 'status',
  type: 'default',
};

export const DefaultNudgeChip = Template.bind({});
DefaultNudgeChip.args = {
  label: 'Default',
  chipType: 'nudge',
  type: 'default',
};

export const SuccessStatusChip = Template.bind({});
SuccessStatusChip.args = {
  label: 'Success',
  chipType: 'status',
  type: 'success',
};

export const SuccessNudgeChip = Template.bind({});
SuccessNudgeChip.args = {
  label: 'Success',
  chipType: 'nudge',
  type: 'success',
};

export const PendingStatusChip = Template.bind({});
PendingStatusChip.args = {
  label: 'Pending',
  chipType: 'status',
  type: 'pending',
};

export const PendingNudgeChip = Template.bind({});
PendingNudgeChip.args = {
  label: 'Pending',
  chipType: 'nudge',
  type: 'pending',
};

export const WarningStatusChip = Template.bind({});
WarningStatusChip.args = {
  label: 'Warning',
  chipType: 'status',
  type: 'warning',
};

export const WarningNudgeChip = Template.bind({});
WarningNudgeChip.args = {
  label: 'Warning',
  chipType: 'nudge',
  type: 'warning',
};
export const InfoStatusChip = Template.bind({});
InfoStatusChip.args = {
  label: 'Info',
  chipType: 'status',
  type: 'info',
};

export const InfoNudgeChip = Template.bind({});
InfoNudgeChip.args = {
  label: 'Info',
  chipType: 'nudge',
  type: 'info',
};
