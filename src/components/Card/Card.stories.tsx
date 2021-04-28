// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Card from '.';

import { CardProps } from './Card.type';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    controls: {
      // disabled: true,
    },
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const DisplayAndLabel = Template.bind({});
DisplayAndLabel.args = {
  cardType: 'display',
  type: 'label',
  title: 'Header',
  subheader: 'Label',
  content: 'content',
  buttonType: 'icon',
  assets: 'No',
};

export const DisplayAndLabel2 = Template.bind({});
DisplayAndLabel2.args = {
  cardType: 'display',
  type: 'label-2',
  title: 'Header',
  subheader: 'Label1',
  subheader2: 'Label2',
  content: 'content',
  content2: 'content',
  buttonType: 'icon',
  assets: 'No',
};

export const DisplayAndSingle = Template.bind({});
DisplayAndSingle.args = {
  cardType: 'display',
  type: 'single',
  title: 'Header',
  buttonType: 'icon',
  assets: 'No',
};

export const DisplayAndExtended = Template.bind({});
DisplayAndExtended.args = {
  cardType: 'display',
  type: 'extended',
  title: 'Header',
  subheader: 'Label',
  content: 'content',
  buttonType: 'icon',
  assets: 'No',
  cardData: [
    { avatar: 'A', content: 'cardData cardData cardData' },
    { avatar: 'A', content: 'cardData cardData cardData' },
    { avatar: 'A', content: 'cardData cardData cardData' },
    { avatar: 'A', content: 'cardData cardData cardData' },
    { avatar: 'A', content: 'cardData cardData cardData' },
    { avatar: 'A', content: 'cardData cardData cardData' },
  ],
};

export const DisplayAndNoLabel = Template.bind({});
DisplayAndNoLabel.args = {
  cardType: 'display',
  type: 'no-label',
  title: 'Header',
  content: 'content',
  buttonType: 'icon',
  assets: 'No',
};

export const DisplayAndTextIcon = Template.bind({});
DisplayAndTextIcon.args = {
  cardType: 'display',
  type: 'label',
  title: 'Header',
  subheader: 'Label',
  content: 'content',
  buttonType: 'text',
  assets: 'No',
};

export const DisplayAndNone = Template.bind({});
DisplayAndNone.args = {
  cardType: 'display',
  type: 'no-label',
  title: 'Header',
  content: 'content',
  buttonType: 'none',
  assets: 'No',
};

export const DisplayAndMetric = Template.bind({});
DisplayAndMetric.args = {
  cardType: 'display',
  type: 'metric',
  title: 'Header',
  content: '₹ 2,50,386',
  buttonType: 'none',
  assets: 'No',
};

export const DisplayAndMetricAndAssets = Template.bind({});
DisplayAndMetricAndAssets.args = {
  cardType: 'display',
  type: 'metric',
  title: 'Header',
  content: '₹ 2,50,386',
  buttonType: 'none',
  assets: 'Yes',
};

export const DisplayAndMetricAndNoAssets = Template.bind({});
DisplayAndMetricAndNoAssets.args = {
  cardType: 'display',
  type: 'metric',
  title: 'Header',
  content: '₹ 2,50,386',
  switchValue: false,
  buttonType: 'switch',
  assets: 'No',
};

export const SelectableAndSingle = Template.bind({});
SelectableAndSingle.args = {
  cardType: 'selectable',
  type: 'single',
  title: 'Header',
};

export const SelectableAndLabel = Template.bind({});
SelectableAndLabel.args = {
  cardType: 'selectable',
  type: 'label',
  title: 'Label',
  subheader: 'Label',
  content: 'content',
};

export const SelectableAndExtended = Template.bind({});
SelectableAndExtended.args = {
  cardType: 'selectable',
  type: 'extended',
  title: 'Extended',
  subheader: 'Label',
  content: 'content',
  disabled: true,
  cardData: [
    { avatar: 'A', content: 'cardData cardData cardData' },
    { avatar: 'A', content: 'cardData cardData cardData' },
    { avatar: 'A', content: 'cardData cardData cardData' },
    { avatar: 'A', content: 'cardData cardData cardData' },
    { avatar: 'A', content: 'cardData cardData cardData' },
    { avatar: 'A', content: 'cardData cardData cardData' },
  ],
};

export const SelectableAndNoLabel = Template.bind({});
SelectableAndNoLabel.args = {
  cardType: 'selectable',
  type: 'no-label',
  title: 'No Label',
  subheader: 'Label',
  content: 'content',
};

export const ClickableAndSingle = Template.bind({});
ClickableAndSingle.args = {
  cardType: 'clickable',
  type: 'single',
  title: 'Header',
  onIconCallback: () => {},
  onCardClick: () => {},
};

export const ClickableAndLabel = Template.bind({});
ClickableAndLabel.args = {
  cardType: 'clickable',
  type: 'label',
  title: 'Label',
  subheader: 'Label',
  content: 'content',
};

export const ClickableAndExtended = Template.bind({});
ClickableAndExtended.args = {
  cardType: 'clickable',
  type: 'extended',
  title: 'Extended',
  subheader: 'Label',
  content: 'content',
  cardData: [
    { avatar: 'A', content: 'cardData cardData cardData' },
    { avatar: 'A', content: 'cardData cardData cardData' },
    { avatar: 'A', content: 'cardData cardData cardData' },
    { avatar: 'A', content: 'cardData cardData cardData' },
    { avatar: 'A', content: 'cardData cardData cardData' },
    { avatar: 'A', content: 'cardData cardData cardData' },
  ],
};

export const ClickableAndNoLabel = Template.bind({});
ClickableAndNoLabel.args = {
  cardType: 'clickable',
  type: 'no-label',
  title: 'No Label',
  subheader: 'Label',
  content: 'content',
};
