import { ISuperheroResponse } from "./../types/superhero-response.type";

export class Superhero {
  id: number;
  name: string;
  image: string;
  // biography: string;

  constructor(model: ISuperheroResponse) {
    this.id = parseInt(model.id);
    this.name = model.name;
    this.image = model.image.url;
    // this.biography = model.biography;
  }
}