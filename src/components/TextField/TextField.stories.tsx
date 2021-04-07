// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { InfoOutlined } from '@material-ui/icons';
import { Story, Meta } from '@storybook/react/types-6-0';

import TextField from '.';

import { TextFieldProps } from './TextField.type';

export default {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    controls: {
    },
  },
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'filled',
  label: 'Label',
  error: false,
  placeholder: 'Placeholder text',
  type: 'text',
};

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
  variant: 'filled',
  label: 'Label',
  error: false,
  placeholder: 'Placeholder text',
  type: 'text',
  disabled: true,
};

export const DefaultWithTrailingIcon = Template.bind({});
DefaultWithTrailingIcon.args = {
  label: 'Label',
  error: false,
  variant: 'filled',
  placeholder: 'Placeholder text',
  type: 'text',
  adornmentEnd: <InfoOutlined />,
};

export const DefaultWithHelperText = Template.bind({});
DefaultWithHelperText.args = {
  label: 'Label',
  error: false,
  variant: 'filled',
  type: 'text',
  placeholder: 'Placeholder text',
  helperText: 'Helper Text',
};

export const DefaultWithHelperTextAndTrailingIcon = Template.bind({});
DefaultWithHelperTextAndTrailingIcon.args = {
  label: 'Label',
  error: false,
  variant: 'filled',
  type: 'text',
  placeholder: 'Placeholder text',
  helperText: 'Helper Text',
  adornmentEnd: <InfoOutlined />,
};

export const PrefixDefault = Template.bind({});
PrefixDefault.args = {
  label: 'Label',
  error: false,
  variant: 'filled',
  placeholder: 'Placeholder text',
  type: 'text',
  adornmentStart: '₹',
};

export const PrefixDefaultWithTrailingIcon = Template.bind({});
PrefixDefaultWithTrailingIcon.args = {
  label: 'Label',
  error: false,
  variant: 'filled',
  placeholder: 'Placeholder text',
  type: 'text',
  adornmentStart: '₹',
  adornmentEnd: <InfoOutlined />,
};

export const PrefixDefaultWithHelperText = Template.bind({});
PrefixDefaultWithHelperText.args = {
  label: 'Label',
  error: false,
  variant: 'filled',
  type: 'text',
  placeholder: 'Placeholder text',
  adornmentStart: '₹',
  helperText: 'Helper Text',
};

export const PrefixDefaultWithHelperTextAndTrailingIcon = Template.bind({});
PrefixDefaultWithHelperTextAndTrailingIcon.args = {
  label: 'Label',
  error: false,
  variant: 'filled',
  type: 'text',
  placeholder: 'Placeholder text',
  helperText: 'Helper Text',
  adornmentStart: '₹',
  adornmentEnd: <InfoOutlined />,
};

export const SuffixDefault = Template.bind({});
SuffixDefault.args = {
  label: 'Label',
  error: false,
  variant: 'filled',
  placeholder: 'Placeholder text',
  type: 'text',
  adornmentSuffix: 'years',
};

export const SuffixDefaultWithTrailingIcon = Template.bind({});
SuffixDefaultWithTrailingIcon.args = {
  label: 'Label',
  error: false,
  variant: 'filled',
  placeholder: 'Placeholder text',
  type: 'text',
  adornmentEnd: <InfoOutlined />,
  adornmentSuffix: 'years',
};

export const SuffixDefaultWithHelperText = Template.bind({});
SuffixDefaultWithHelperText.args = {
  label: 'Label',
  error: false,
  variant: 'filled',
  type: 'text',
  placeholder: 'Placeholder text',
  helperText: 'Helper Text',
  adornmentSuffix: 'years',
};

export const SuffixDefaultWithHelperTextAndTrailingIcon = Template.bind({});
SuffixDefaultWithHelperTextAndTrailingIcon.args = {
  label: 'Label',
  error: false,
  variant: 'filled',
  type: 'text',
  placeholder: 'Placeholder text',
  helperText: 'Helper Text',
  adornmentEnd: <InfoOutlined />,
  adornmentSuffix: 'years',
};
