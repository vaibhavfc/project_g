// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Datepicker from '.';

import { DatepickerProps } from './Datepicker.type';

export default {
  title: 'Components/Datepicker',
  component: Datepicker,
  parameters: {
    controls: {
      // disabled: true,
    },
  },
} as Meta;

const Template: Story<DatepickerProps> = (args) => <Datepicker {...args} />;

export const DefaultDatepicker = Template.bind({});
DefaultDatepicker.args = {
};
