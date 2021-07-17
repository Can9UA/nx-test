import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TestCmpComponent } from './test-cmp.component';

export default {
  title: 'TestCmpComponent',
  component: TestCmpComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    }
  },
} as Meta<TestCmpComponent>;

const Template: Story<TestCmpComponent> = (args: TestCmpComponent) => ({
  component: TestCmpComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    input1: 100,
    input2: 75,
}
