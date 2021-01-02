/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CustomButton, ButtonProps } from 'styles/Button/CustomButton';

export default {
  title: 'CustomButton/CustomButton',
  component: CustomButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <CustomButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};

export const sizes = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <CustomButton size="large" label="Button" />
      </div>
      <div>
        <CustomButton size="medium" label="Button" />
      </div>
      <div>
        <CustomButton size="small" label="Button" />
      </div>
    </div>
  );
};

export const colors = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <CustomButton theme="secondary" label="Secondary" />
      </div>
      <div>
        <CustomButton theme="primary" label="Primary" />
      </div>
      <div>
        <CustomButton theme="info" label="Info" />
      </div>
      <div>
        <CustomButton theme="success" label="Success" />
      </div>
      <div>
        <CustomButton theme="warning" label="Warning" />
      </div>
      <div>
        <CustomButton theme="danger" label="Danger" />
      </div>
    </div>
  );
};

export const OutLineColors = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <CustomButton theme="secondary" label="Secondary" />
      </div>
      <div>
        <CustomButton theme="out_primary" label="Primary" />
      </div>
      <div>
        <CustomButton theme="out_info" label="Info" />
      </div>
      <div>
        <CustomButton theme="out_success" label="Success" />
      </div>
      <div>
        <CustomButton theme="out_warning" label="Warning" />
      </div>
      <div>
        <CustomButton theme="out_danger" label="Danger" />
      </div>
    </div>
  );
};

// export const Danger = Template.bind({});
// Danger.args = {
//   theme: 'danger',
//   label: 'Button',
// };

const buttonWrapper = css`
  div {
    display: inline-block;
    margin: 0 10px 0 0;
    vertical-align: top;
  }
`;
