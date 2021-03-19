// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Header from '.';

import { HeaderProps } from './Header.type';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    controls: {
      // disabled: true,
    },
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const HeaderMedium = Template.bind({});
HeaderMedium.args = {
  size: 'medium',
};

export const HeaderLarge = Template.bind({});
HeaderLarge.args = {
  size: 'large',
};
