// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import ProgressIndicator from '.';

import { ProgressIndicatorProps } from './ProgressIndicator.type';

export default {
  title: 'Components/ProgressIndicator',
  component: ProgressIndicator,
  parameters: {
    controls: {
      // disabled: true,
    },
  },
} as Meta;

const Template: Story<ProgressIndicatorProps> = (args) => <ProgressIndicator {...args} />;

export const ProgressStepIndicator = Template.bind({});
ProgressStepIndicator.args = {
  type: 'progress',
  progressIndicatorType: 'step',
  value: 60,
  progressStepLabel: 'X/N',
};

export const ProgressPercentageIndicator = Template.bind({});
ProgressPercentageIndicator.args = {
  type: 'progress',
  progressIndicatorType: 'percentage',
  value: 25,
};

export const ErrorStepIndicator = Template.bind({});
ErrorStepIndicator.args = {
  type: 'error',
  progressIndicatorType: 'step',
  value: 60,
};

export const ErrorPercentageIndicator = Template.bind({});
ErrorPercentageIndicator.args = {
  type: 'error',
  progressIndicatorType: 'percentage',
  value: 60,
};

export const SuccessStepIndicator = Template.bind({});
SuccessStepIndicator.args = {
  type: 'success',
  progressIndicatorType: 'step',
  value: 100,
};

export const SuccessPercentageIndicator = Template.bind({});
SuccessPercentageIndicator.args = {
  type: 'success',
  progressIndicatorType: 'percentage',
  value: 100,
};

export const DemoPercentageIndicator = Template.bind({});
DemoPercentageIndicator.args = {
  type: 'progress',
  progressIndicatorType: 'percentage',
};
