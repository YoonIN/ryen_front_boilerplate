/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TextInput } from 'styles';

export default {
  title: 'Input/TextInput',
  component: TextInput,
} as Meta;

const Template: Story = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
