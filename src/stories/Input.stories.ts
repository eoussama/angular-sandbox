import { CommonModule } from '@angular/common';
import { ControlContainer, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { InputComponent } from 'src/app/components/input/input.component';

export default {
  title: 'Components/Input',
  excludeStories: /.*Data$/,
  component: InputComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, FormsModule, ReactiveFormsModule],
      providers: [ControlContainer]
    })
  ]
} as Meta;

const Template: Story = args => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  label: 'Input',
  placeholder: 'Placeholder...'
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password here...'
};

export const Icon = Template.bind({});
Icon.args = {
  label: 'Login',
  icon: 'person',
  placeholder: 'Enter your username here...'
};