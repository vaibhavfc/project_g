// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Skrim from '.';

import classes from './SkrimWithClass.module.scss';

import { SkrimProps } from './Skrim.type';

export default {
  title: 'Components/Skrim',
  component: Skrim,
  parameters: {
    controls: {
      // disabled: true,
    },
  },
} as Meta;

const Template: Story<SkrimProps> = (args) => <Skrim {...args} />;

export const Modal1 = Template.bind({});
Modal1.args = {
  type: 'modal1',
};

export const Modal2 = Template.bind({});
Modal2.args = {
  type: 'modal2',
};

export const NonModal = Template.bind({});
NonModal.args = {
  type: 'nonModal',
};
