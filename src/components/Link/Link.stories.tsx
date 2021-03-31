// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Link from '.';

import { LinkProps } from './Link.type';

export default {
  title: 'Components/Link',
  component: Link,
  parameters: {
    controls: {
      // disabled: true,
    },
  },
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const DefaultLink = Template.bind({});
DefaultLink.args = {
  children: 'Default Link',
  to: 'default_link',
};

export const InlineLink = Template.bind({});
InlineLink.args = {
  children: 'Inline Link',
  inlineLink: true,
  to: 'inline_link',
};

export const VisitedLink = Template.bind({});
VisitedLink.args = {
  children: 'Visited Link',
  active: true,
  to: 'active_link',
};
