import Primary from './primary.component';

const Template = args => <Primary {...args} />

export const Default = Template.bind({});
Default.args = {}

export default {
  component: Primary,
  title: 'Primary',
};