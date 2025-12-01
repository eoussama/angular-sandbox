import { CommonModule } from '@angular/common';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { CardComponent } from 'src/app/components/card/card.component';

const meta: Meta<CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      imports: [CommonModule]
    })
  ]
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <app-card title="Card Title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </app-card>
    `
  })
};
