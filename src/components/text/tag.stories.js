import Tag from './tag.component';  

const Template = args => <Tag {...args} />

export const Default = Template.bind({});
Default.args = {}

export default {
  component: Tag,
  title: 'Tag',
};
