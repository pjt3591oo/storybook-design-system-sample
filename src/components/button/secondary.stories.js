import Secondary from './secondary.component';

const Template = args => <Secondary {...args} />

export const Default = Template.bind({});
Default.args = {}

export default {
  component: Secondary,
  title: 'Secondary',
};
