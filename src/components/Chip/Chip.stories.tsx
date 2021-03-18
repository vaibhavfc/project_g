// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Chip from '.';

import classes from './LinkWithClass.module.scss'

import { ChipProps } from './Chip.type';

export default {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    controls: {
      // disabled: true,
    }
  }
} as Meta;

const Template: Story<ChipProps> = (args) => <Chip {...args} />

export const DefaultMediumChip = Template.bind({});
DefaultMediumChip.args = {
  label: 'Default',
  size: 'medium',
  type: 'default'
}

export const DefaultSmallChip = Template.bind({});
DefaultSmallChip.args = {
  label: 'Default',
  size: 'small',
  type: 'default'
}

export const SuccessMediumChip = Template.bind({});
SuccessMediumChip.args = {
  label: 'Success',
  size: 'medium',
  type: 'success'
}

export const SuccessSmallChip = Template.bind({});
SuccessSmallChip.args = {
  label: 'Success',
  size: 'small',
  type: 'success'
}

export const PendingMediumChip = Template.bind({});
PendingMediumChip.args = {
  label: 'Pending',
  size: 'medium',
  type: 'pending'
}

export const PendingSmallChip = Template.bind({});
PendingSmallChip.args = {
  label: 'Pending',
  size: 'small',
  type: 'pending'
}

export const WarningMediumChip = Template.bind({});
WarningMediumChip.args = {
  label: 'Warning',
  size: 'medium',
  type: 'warning'
}

export const WarningSmallChip = Template.bind({});
WarningSmallChip.args = {
  label: 'Warning',
  size: 'small',
  type: 'warning'
}
export const InfoMediumChip = Template.bind({});
InfoMediumChip.args = {
  label: 'Info',
  size: 'medium',
  type: 'info'
}

export const InfoSmallChip = Template.bind({});
InfoSmallChip.args = {
  label: 'Info',
  size: 'small',
  type: 'info'
}

