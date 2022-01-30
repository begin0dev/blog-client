import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IcSearch } from 'assets/svgs';

import Button from './Button';

export default {
  component: Button,
  title: Button.name,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const BasicButton = Template.bind({});
BasicButton.args = {
  children: 'Button',
};

export const IconButton = Template.bind({});
IconButton.args = {
  children: <IcSearch />,
  icon: true,
};
