import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TestCmpComponent, Variant } from "./test-cmp.component";
import { TestLibModule } from "./test-lib.module";

export default {
  title: 'Components/TestComponent',
  component: TestCmpComponent,
  decorators: [
    moduleMetadata({
      imports: [TestLibModule],
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
  argTypes: {
    variant: {
      options: [Variant.One, Variant.Two,  Variant.Three],
      control: { type: 'select' }
    }
  }
} as Meta<TestCmpComponent>;

const Template: Story<TestCmpComponent> = (args: TestCmpComponent) => ({
  component: TestCmpComponent,
  props: args,
  template: `
    <h1> Custom template </h1>
    <hr>
    <nx-test-cmp [input1]="input1" [input2]="input2"></nx-test-cmp>
  `
});


export const Primary = Template.bind({});
Primary.args = {
    input1: 100,
    input2: 75,
    flag: true,
    variant: Variant.Two
}
