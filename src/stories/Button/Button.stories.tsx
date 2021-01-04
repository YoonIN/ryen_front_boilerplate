/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from 'styles/Button/Button';

export default {
  title: 'Button/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const sizes = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button size="large">Button</Button>
      </div>
      <div>
        <Button size="medium">Button</Button>
      </div>
      <div>
        <Button size="small">Button</Button>
      </div>
    </div>
  );
};

export const colors = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button theme="secondary">Secondary</Button>
      </div>
      <div>
        <Button theme="primary">Primary</Button>
      </div>
      <div>
        <Button theme="info">Info</Button>
      </div>
      <div>
        <Button theme="success">Success</Button>
      </div>
      <div>
        <Button theme="warning">Warning</Button>
      </div>
      <div>
        <Button theme="danger">Danger</Button>
      </div>
    </div>
  );
};

export const OutLineColors = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button theme="secondary">Secondary</Button>
      </div>
      <div>
        <Button theme="out_primary">Primary</Button>
      </div>
      <div>
        <Button theme="out_info">Info</Button>
      </div>
      <div>
        <Button theme="out_success">Success</Button>
      </div>
      <div>
        <Button theme="out_warning">Warning</Button>
      </div>
      <div>
        <Button theme="out_danger">Danger</Button>
      </div>
    </div>
  );
};
const buttonWrapper = css`
  div {
    display: inline-block;
    margin: 0 10px 0 0;
    vertical-align: top;
  }
`;
