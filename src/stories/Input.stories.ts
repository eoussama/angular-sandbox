import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ThumbModule } from 'src/app/components/thumb/thumb.module';
import { LoaderComponent } from 'src/app/components/loader/loader.component';

export default {
  title: 'Components/Loader',
  component: LoaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, ThumbModule],
    })
  ]
} as Meta;

export const Default = () => ({
  component: LoaderComponent,
  props: {
    text: 'Hello Button',
    onClick: action('clicked'),
  },
});
