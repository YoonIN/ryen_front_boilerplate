/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ButtonProps } from 'styles/Button/Button';
import { GroupButton, Button, Icon } from 'styles';

export default {
  title: 'Button/Icon',
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

export const IconButton = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button size="large">
          <Icon icon="heart" color="red" /> Like
        </Button>
      </div>
      <div>
        <Button>
          <Icon icon="heart" color="red" /> Like
        </Button>
      </div>
      <div>
        <Button size="small">
          <Icon icon="heart" color="red" /> Like
        </Button>
      </div>
    </div>
  );
};

export const iconOnly = () => {
  return (
    <div>
      <GroupButton>
        <Button iconOnly size="large">
          <Icon icon="heart" color="red" />
        </Button>
        <Button iconOnly>
          <Icon icon="heart" color="red" />
        </Button>
        <Button iconOnly size="small">
          <Icon icon="heart" color="red" />
        </Button>
      </GroupButton>
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
