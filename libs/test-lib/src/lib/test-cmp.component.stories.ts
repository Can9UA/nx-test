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
