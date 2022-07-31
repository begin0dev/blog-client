import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IcSearch } from 'assets/svgs';
import Button from './Button';

export default {
  title: Button.name,
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const TextButton = Template.bind({});
TextButton.args = {
  children: 'Button',
};

export const IconButton = Template.bind({});
IconButton.args = {
  shape: 'icon',
  children: <IcSearch />,
};
