// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Breadcrumbs from '.';

// import classes from './ButtonWithClass.module.scss'
// import Link from '../Link/Link'

import { BreadcrumbsProps } from './Breadcrumbs.type';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
} as Meta;

const Template: Story<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {
  maxItems: 4,
  links: [
    { href: '#', linkText: 'Link', active: false },
    { href: '#', linkText: 'Link', active: false },
    { href: '#', linkText: 'Link', active: false },
    { href: '#', linkText: 'Link', active: false },
    { href: '#', linkText: 'Link', active: false },
    { href: '/1', linkText: 'Current Page', active: true }],
};
