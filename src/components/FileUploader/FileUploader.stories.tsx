// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import FileUploader from '.';

import { FileUploaderProps } from './FileUploader.type';

export default {
  title: 'Components/FileUploader',
  component: FileUploader,
  parameters: {
    controls: {
    },
  },
} as Meta;

const Template: Story<FileUploaderProps> = (args) => <FileUploader {...args} />;

export const DefaultFileUploader = Template.bind({});
DefaultFileUploader.args = {
  type: 'pdf',
  value: 50,
};
