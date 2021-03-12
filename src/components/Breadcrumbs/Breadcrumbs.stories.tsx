// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Breadcrumbs from '.';

import classes from './ButtonWithClass.module.scss'

import { BreadcrumbsProps } from './Breadcrumbs.type';
import Link from '../Link/Link'

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs
} as Meta;

const Template: Story<BreadcrumbsProps> = (args) => <Breadcrumbs {...args}></Breadcrumbs>;

export const Default = Template.bind({});
Default.args = {
  children: '',
  maxItems: 4
}
