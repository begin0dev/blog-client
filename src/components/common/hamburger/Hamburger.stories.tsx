import { ComponentMeta, ComponentStory } from '@storybook/react';

import Hamburger from './Hamburger';

export default {
  title: Hamburger.name,
  component: Hamburger,
} as ComponentMeta<typeof Hamburger>;

const Template: ComponentStory<typeof Hamburger> = (args) => <Hamburger {...args} />;

export const BasicHamburger = Template.bind({});
BasicHamburger.args = {};
