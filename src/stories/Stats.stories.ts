import { CommonModule } from '@angular/common';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { StatsComponent } from 'src/app/components/stats/stats.component';
import { Stats } from 'src/app/models/stats.model';

const meta: Meta<StatsComponent> = {
  title: 'Components/Stats',
  component: StatsComponent,
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      imports: [CommonModule]
    })
  ]
};

export default meta;
type Story = StoryObj<StatsComponent>;

export const Default: Story = {
  args: {
    stats: new Stats({
      combat: Math.random() * 100,
      durability: Math.random() * 100,
      intelligence: Math.random() * 100,
      speed: Math.random() * 100,
      power: Math.random() * 100,
      strength: Math.random() * 100
    })
  }
};

export const Loading: Story = {};
