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
} as Meta<TestCmpComponent>;

const Template: Story<TestCmpComponent> = (args: TestCmpComponent) => ({
  component: TestCmpComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    input1: 100,
    input2: 75,
    flag: true,
    variant: Variant.Two
}

/*
variant: {
  values: [
    { name: 'variant one', value: Variant.One },
    { name: 'variant two', value: Variant.Two },
    { name: 'three', value: Variant.Three },
  ],
},
* */
