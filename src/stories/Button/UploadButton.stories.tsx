/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Meta } from '@storybook/react/types-6-0';
import { UploadButton } from 'styles/Button/UploadButton';

export default {
  title: 'Button/UploadButton',
  component: UploadButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const column = () => {
  return <UploadButton label="업로드 버튼" />;
};
