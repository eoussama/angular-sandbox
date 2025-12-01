import { CommonModule } from '@angular/common';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ButtonComponent } from 'src/app/components/button/button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    })
  ]
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    label: 'Button'
  }
};

export const Icon: Story = {
  args: {
    label: 'Brainstorm',
    icon: 'lightbulb'
  }
};

export const Click: Story = {
  args: {
    label: 'Click Me!',
    icon: 'arrow_selector_tool'
  }
};

export const Loading: Story = {
  args: {
    label: 'Start Action',
    icon: 'play_arrow',
    loading: true
  }
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width',
    full: true
  }
};
