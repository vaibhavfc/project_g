// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '.';

import classes from './ButtonWithClass.module.scss';

import { ButtonProps } from './Button.type';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    controls: {
      // disabled: true,
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Primary button',
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  children: 'Primary button',
  withIcon: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  children: 'Secondary button',
};

export const SecondaryWithIcon = Template.bind({});
SecondaryWithIcon.args = {
  children: 'Secondary button',
  color: 'secondary',
  withIcon: true,
};

export const IconButton = Template.bind({});
IconButton.args = {
  hasIconOnly: true,
};

export const FlushButton = Template.bind({});
FlushButton.args = {
  children: 'Flushed button',
  isFlushButton: true,
};

export const TextButton = Template.bind({});
TextButton.args = {
  children: 'Text button',
  textButton: true,
};

export const CustomButton = Template.bind({});
CustomButton.args = {
  children: 'Custom button',
  classes,
};

const TemplatePlayground: Story<ButtonProps> = (args) => (
  <ButtonGroup><Button {...args} /></ButtonGroup>
);

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  children: 'TODO Build Playground',
};
