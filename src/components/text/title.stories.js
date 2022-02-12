import Title from './title.component';

const Template = args => <Title {...args} />

export const Default = Template.bind({})
Default.args = {}

export default {
  component: Title,
  title: 'Title',
};
