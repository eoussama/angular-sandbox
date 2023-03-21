import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from 'src/app/components/button/button.component';

export default {
  title: 'Components/Button',
  excludeStories: /.*Data$/,
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    })
  ]
} as Meta;

const Template: Story = args => ({
  props: {
    ...args
  },
});

export const Default = Template.bind({});
Default.args = {
  label: 'Button'
};

export const Icon = Template.bind({});
Icon.args = {
  label: 'Brainstorm',
  icon: 'lightbulb'
};

export const Click = Template.bind({});
Click.args = {
  label: 'Click Me!',
  icon: 'arrow_selector_tool'
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Start Action',
  icon: 'play_arrow',
  loading: true
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: 'Full Width',
  full: true
};