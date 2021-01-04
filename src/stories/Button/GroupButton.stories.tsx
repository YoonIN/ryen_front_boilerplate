/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Meta } from '@storybook/react/types-6-0';
import {
  GroupButton,
  // GroupButtonProps,
} from 'styles/Button/GroupButton';
import { Button } from 'styles/Button/Button';

export default {
  title: 'Button/GroupButton',
  component: GroupButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// const Template: Story<GroupButtonProps> = (args) => (
//   <GroupButton {...args} />
// );

export const defaultAlign = () => {
  return (
    <GroupButton>
      <Button>취소</Button>
      <Button>확인</Button>
    </GroupButton>
  );
};

export const centerAlign = () => {
  return (
    <GroupButton position="center">
      <Button>취소</Button>
      <Button>확인</Button>
    </GroupButton>
  );
};
export const rightAlign = () => {
  return (
    <GroupButton position="right">
      <Button>취소</Button>
      <Button>확인</Button>
    </GroupButton>
  );
};

export const row = () => {
  return (
    <GroupButton direction="row">
      <Button>클릭</Button>
      <Button>클릭</Button>
    </GroupButton>
  );
};

export const column = () => {
  return (
    <GroupButton direction="column">
      <Button>클릭</Button>
      <Button>클릭</Button>
    </GroupButton>
  );
};

export const customGapColumn = () => {
  return (
    <GroupButton direction="column" gap="1rem">
      <Button>클릭</Button>
      <Button>클릭</Button>
    </GroupButton>
  );
};
