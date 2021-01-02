/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Meta } from '@storybook/react/types-6-0';
import {
  CustomGroupButton,
  // CustomGroupButtonProps,
} from 'styles/Button/CustomGroupButton';
import { CustomButton } from 'styles/Button/CustomButton';

export default {
  title: 'CustomButton/CustomGroupButton',
  component: CustomGroupButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// const Template: Story<CustomGroupButtonProps> = (args) => (
//   <CustomGroupButton {...args} />
// );

export const rightAlign = () => {
  return (
    <CustomGroupButton rightAlign>
      <CustomButton label="취소" />
      <CustomButton label="확인" />
    </CustomGroupButton>
  );
};

export const column = () => {
  return (
    <CustomGroupButton direction="column">
      <CustomButton label="클릭" />
      <CustomButton label="클릭" />
    </CustomGroupButton>
  );
};
export const row = () => {
  return (
    <CustomGroupButton direction="row">
      <CustomButton label="클릭" />
      <CustomButton label="클릭" />
    </CustomGroupButton>
  );
};

export const customGapColumn = () => {
  return (
    <CustomGroupButton direction="column" gap="1rem">
      <CustomButton label="클릭" />
      <CustomButton label="클릭" />
    </CustomGroupButton>
  );
};

// export const customGap = () => {
//   return (
//     <CustomGroupButton gap="1rem">
//       <CustomButton label='취소'/>
//       <CustomButton label='확인/'>
//     </CustomGroupButton>
//   );
// };
