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
  <>
    <div>
      <Button shape="primary">primary</Button>
      <Button shape="secondary">secondary</Button>
      <Button shape="ghost">ghost</Button>
      <Button shape="link">link</Button>
      <Button shape="icon1">
        <IcBell />
      </Button>
      <Button shape="icon2">
        <IcBell />
      </Button>
      <Button shape="icon3">
        <IcBell />
      </Button>
    </div>
    <Button {...args}>{children}</Button>
  </>
);

export const TextButton = Template.bind({});
TextButton.args = {
  children: 'button',
};
