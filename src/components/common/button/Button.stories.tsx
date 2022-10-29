import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { IcBell } from 'assets/svgs';

import Button from './Button';

export default {
  title: 'Common Button',
  component: Button,
  argTypes: {
    children: {
      control: false,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const TextButton = Template.bind({});
TextButton.args = {
  children: 'button',
};

export const IconButton = Template.bind({});
IconButton.args = {
  shape: 'icon',
  children: <IcBell />,
};
