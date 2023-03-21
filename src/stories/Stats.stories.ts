import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { StatsComponent } from 'src/app/components/stats/stats.component';
import { Stats } from 'src/app/models/stats.model';

export default {
  title: 'Components/Stats',
  excludeStories: /.*Data$/,
  component: StatsComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule]
    })
  ]
} as Meta;

const Template: Story = args => ({
  props: {
    ...args
  }
});

export const Default = Template.bind({});
Default.args = {
  stats: new Stats({
    combat: Math.random() * 100,
    durability: Math.random() * 100,
    intelligence: Math.random() * 100,
    speed: Math.random() * 100,
    power: Math.random() * 100,
    strength: Math.random() * 100
  })
}

export const Loading = Template.bind({});
