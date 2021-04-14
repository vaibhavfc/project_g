// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import ProgressTracker from '.';

import { ProgressTrackerProps } from './ProgressTracker.type';

export default {
  title: 'Components/ProgressTracker',
  component: ProgressTracker,
  parameters: {
    controls: {
      // disabled: true,
    },
  },
} as Meta;

const Template: Story<ProgressTrackerProps> = (args) => <ProgressTracker {...args} />;

export const DefaultProgressTracker = Template.bind({});
DefaultProgressTracker.args = {
  currentStep: 2,
  steps: [
    {
      title: 'Verification',
      variant: 'first',
      status: 'current',
      chip: true,
    },
    {
      title: 'Profile Information',
      variant: 'middle',
      status: 'unvisited',
      // stepNumber: 2,
    },
    {
      title: 'Add fund',
      variant: 'middle',
      status: 'unvisited',
      // stepNumber: 3,
    },
    {
      title: 'Video Verification',
      variant: 'last',
      status: 'unvisited',
      // stepNumber: 4,
    },
  ],
};
