// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Link from '.';

import classes from './LinkWithClass.module.scss'

import { LinkProps } from './Link.type';

export default {
  title: 'Components/Link',
  component: Link,
  parameters: {
    controls: {
      // disabled: true,
    }
  }
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args}></Link>

export const DefaultLink = Template.bind({});
DefaultLink.args = {
  children: 'Default Link',
}

export const InlineLink = Template.bind({});
InlineLink.args = {
  children: 'Inline Link',
  inlineLink: true,
}

export const ActiveLink = Template.bind({})
ActiveLink.args = {
  children: 'Active Link',
  active: true
}
