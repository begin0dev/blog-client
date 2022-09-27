import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Spinner from './Spinner';

export default {
  title: 'Common Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const BasicSpinner = Template.bind({});
BasicSpinner.args = {};
