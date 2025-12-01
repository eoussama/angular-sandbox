import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ThumbComponent } from 'src/app/components/thumb/thumb.component';
import { Superhero } from 'src/app/models/superhero.model';
import { FavoritesService } from 'src/app/services/favorites/favorites.service';

const superhero = {
  "id": "1",
  "name": "A-Bomb",
  "powerstats": {
    "intelligence": "38",
    "strength": "100",
    "speed": "17",
    "durability": "80",
    "power": "24",
    "combat": "64"
  },
  "biography": {
    "full-name": "Richard Milhouse Jones",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "Rick Jones"
    ],
    "place-of-birth": "Scarsdale, Arizona",
    "first-appearance": "Hulk Vol 2 #2 (April, 2008) (as A-Bomb)",
    "publisher": "Marvel Comics",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Male",
    "race": "Human",
    "height": [
      "6'8",
      "203 cm"
    ],
    "weight": [
      "980 lb",
      "441 kg"
    ],
    "eye-color": "Yellow",
    "hair-color": "No Hair"
  },
  "work": {
    "occupation": "Musician, adventurer, author; formerly talk show host",
    "base": "-"
  },
  "connections": {
    "group-affiliation": "Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom",
    "relatives": "Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg"
  }
};

const meta: Meta<ThumbComponent> = {
  title: 'Components/Thumb',
  component: ThumbComponent,
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, HttpClientModule, StoreModule.forRoot({})],
      providers: [FavoritesService]
    })
  ]
};

export default meta;
type Story = StoryObj<ThumbComponent>;

export const Loading: Story = {
  args: {
    loader: true
  }
};

export const Default: Story = {
  args: {
    superhero: new Superhero(superhero)
  }
};

