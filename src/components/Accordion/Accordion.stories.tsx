// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Accordion from '.';

import { AccordionProps } from './Accordion.type';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    controls: {
    },
  },
} as Meta;

const Template: Story<AccordionProps> = (args) => <Accordion {...args} />;

export const DefaultAccordion = Template.bind({});
DefaultAccordion.args = {
  items: [
    {
      title: 'Header-1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nisl, nunc consequat eu blandit lacus facilisis natoque ullamcorper. Sapien arcu eleifend cras in.',
    },
    {
      title: 'Header-2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nisl, nunc consequat eu blandit lacus facilisis natoque ullamcorper. Sapien arcu eleifend cras in.',
    },
    {
      title: 'Header-3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nisl, nunc consequat eu blandit lacus facilisis natoque ullamcorper. Sapien arcu eleifend cras in.',
    },
    {
      title: 'Header-4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nisl, nunc consequat eu blandit lacus facilisis natoque ullamcorper. Sapien arcu eleifend cras in.',
    },
  ],
};
