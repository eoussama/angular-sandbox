import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CardComponent } from 'src/app/components/card/card.component';

export default {
  title: 'Components/Card',
  excludeStories: /.*Data$/,
  component: CardComponent,
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
  },
  template: `
    <app-card title="Card Title">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </app-card>
  `
});

export const Default = Template.bind({});
