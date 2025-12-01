import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, ControlContainer, FormGroupDirective, FormGroup, FormControl } from '@angular/forms';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { InputComponent } from 'src/app/components/input/input.component';

const formGroup = new FormGroup({
  input: new FormControl('')
});

const formGroupDirective = new FormGroupDirective([], []);
formGroupDirective.form = formGroup;

const meta: Meta<InputComponent> = {
  title: 'Components/Input',
  component: InputComponent,
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, ReactiveFormsModule],
      providers: [
        { provide: ControlContainer, useValue: formGroupDirective }
      ]
    })
  ]
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    label: 'Input',
    placeholder: 'Placeholder...',
    formControlName: 'input'
  }
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password here...',
    formControlName: 'input'
  }
};

export const Icon: Story = {
  args: {
    label: 'Login',
    icon: 'person',
    placeholder: 'Enter your username here...',
    formControlName: 'input'
  }
};
