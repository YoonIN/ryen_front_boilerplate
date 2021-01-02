/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Meta } from '@storybook/react/types-6-0';
import { CustomUploadButton } from 'styles/Button/CustomUploadButton';

export default {
  title: 'CustomButton/CustomUploadButton',
  component: CustomUploadButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// const Template: Story<CustomGroupButtonProps> = (args) => (
//   <CustomGroupButton {...args} />
// );

export const column = () => {
  return <CustomUploadButton label="업로드 버튼" />;
};
