/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Dialog } from 'styles';
import { Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Dialog/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 500,
    },
  },
} as Meta;

export const dialog = () => {
  return (
    <Dialog
      title="포스트 삭제"
      description="포스트를 정말로 삭제하시겠습니까?"
      visible={true}
      confirmText="확인"
      cancellable
    />
  );
};

export const DeleteDialog = () => {
  return (
    <Dialog
      title="포스트 삭제"
      description="포스트를 정말로 삭제하시겠습니까?"
      visible={true}
      confirmText="확인"
      cancellable
    />
  );
};

export const AlertDialog = () => {
  return (
    <Dialog
      title="포스트 삭제"
      description="포스트를 정말로 삭제하시겠습니까?"
      visible={true}
      confirmText="확인"
      cancellable={false}
    />
  );
};

dialog.story = {
  name: 'Default',
};
