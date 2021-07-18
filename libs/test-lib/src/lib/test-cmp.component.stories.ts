import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TestCmpComponent } from "./test-cmp.component";
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
    docs: {
      description: {
        component: 'Test cmp documentation _markdown_',
        story: 'Secondary story documentation **markdown**',
      },
    }
  },
  argTypes: {
    input1: {
      type: {
        required: true
      },
      table: {
        category: 'inputs',
        subcategory: 'Numbers',
        type: {
          summary: 'Just an input',
          detail: 'Just details'
        },
        defaultValue: {
          summary: '100',
          detail: 'I like this number'
        }
      },
      description: 'Description lorem ipsom',
    },
    input2: {
      type: {
        required: true
      },
      table: {
        category: 'inputs',
        subcategory: 'Numbers'
      }
    },
    variant: {
      options: [0, 1, 2],
      control: { type: 'select' },
      table: {
        category: 'inputs',
        subcategory: 'Other',
        type: {
          summary: 'Here is label',
          detail: 'Text inside the label pdf hdfuhas ifhfi huaf'
        }
      },
      description: 'Description lorem ipsom',
    },
    flag: {
      table: {
        category: 'inputs',
        subcategory: 'Other',
      }
    },
    output1: {
      table: {
        category: 'Outputs'
      }
    },
    output2: {
      table: {
        category: 'Outputs'
      }
    },
    emitEvent: { action: 'emitEvent arguments' },
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
    variant: 1,
}

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args
}
