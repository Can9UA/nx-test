import { moduleMetadata, Story, Meta, componentWrapperDecorator } from "@storybook/angular";
import { TestListComponent } from "./test-list.component";
import { TestLibModule } from "../test-lib.module";

//👇 Imports the Button stories
import * as TestCompStory from '../test-cmp.component.stories';

export default {
  title: 'Components/TestList',
  component: TestListComponent,
  decorators: [
    moduleMetadata({
      imports: [TestLibModule],
    }),
    componentWrapperDecorator((story) => `<div style="margin: 3em">${story}</div>`),
  ],
} as Meta<TestListComponent>;

const Template: Story<TestListComponent> = (args: TestListComponent) => ({
  component: TestListComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    amount: 2,
    btnConfig: {
      ...TestCompStory.Primary.args
    }
}
