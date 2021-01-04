/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Dialog } from 'styles';
import { Meta } from '@storybook/react/types-6-0';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Dialog/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 500,
    },
  },
  decorators: [withKnobs],
} as Meta;

export const dialog = () => {
  const title = text('title', '제목');
  const description = text('description', '내용');
  const visible = boolean('visible', true);
  const confirmText = text('confirmText', '확인');
  const cancelText = text('cancelText', '취소');
  const cancellable = boolean('cancellable', false);

  return (
    <Dialog
      title={title}
      description={description}
      visible={visible}
      confirmText={confirmText}
      cancelText={cancelText}
      cancellable={cancellable}
    />
  );
};

export const ConfirmDialog = () => {
  return (
    <Dialog
      title="제목"
      description="내용"
      visible={true}
      confirmText="확인"
      cancellable
    />
  );
};

export const AlertDialog = () => {
  return (
    <Dialog
      title="제목"
      description="내용"
      visible={true}
      confirmText="확인"
      cancellable={false}
    />
  );
};

dialog.story = {
  name: 'Default',
};
