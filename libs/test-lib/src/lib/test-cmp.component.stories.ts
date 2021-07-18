import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TestCmpComponent } from "./test-cmp.component";
import { TestLibModule } from "./test-lib.module";
import { action } from '@storybook/addon-actions';

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
      source: {
        type: 'auto', // code, auto, dynamic
      },
      description: {
        component: 'Test cmp documentation _markdown_',
        story: 'Secondary story documentation **markdown**',
      },
    },
    // controls: { expanded: true } // show docs in canvas tab for contols
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
    }
  }
} as Meta<TestCmpComponent>;

const componentOutputs = {
  output1: action('output1 return'),
  output2: action('output2 return'),
};

const Template: Story<TestCmpComponent> = (args: TestCmpComponent) => ({
  component: TestCmpComponent,
  props: {
    ...args,
    output1: componentOutputs.output1,
    output2: componentOutputs.output2,
  },
  template: `
    <h1> Custom template </h1>
    <hr>
    <nx-test-cmp [input1]="input1"
                 [input2]="input2"
                 (output1)="output1($event)"
                 (output2)="output2($event)">
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
