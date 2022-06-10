import { ComponentMeta, ComponentStory } from '@storybook/react';

import Spinner from './Spinner';

export default {
  title: Spinner.name,
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const BasicSpinner = Template.bind({});
BasicSpinner.args = {};
