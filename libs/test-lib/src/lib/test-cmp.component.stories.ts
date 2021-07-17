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
    input1: {
      table: {
        category: 'numbers'
      }
    },
    input2: {
      table: {
        category: 'numbers'
      }
    },
    variant: {
      options: [0, 1, 2],
      control: { type: 'select' },
      table: {
        category: 'Other',
        type: {
          summary: 'Here is label',
          detail: 'Text inside the label pdf hdfuhas ifhfi huaf'
        }
      },
      description: 'Description lorem ipsom',
      // defaultValue: 'asda' TODO
    },
    flag: {
      table: {
        category: 'Other'
      }
    }
  }
} as Meta<TestCmpComponent>;

const Template: Story<TestCmpComponent> = (args: TestCmpComponent) => ({
  component: TestCmpComponent,
  props: args,
  template: `
    <h1> Custom template </h1>
    <hr>
    <nx-test-cmp [input1]="${args.input1}"
                 [input2]="${args.input2}">
    </nx-test-cmp>
  `
});


export const Primary = Template.bind({});
Primary.args = {
    input1: 100,
    input2: 75,
    flag: true,
    variant: undefined // Variant.Two
}
