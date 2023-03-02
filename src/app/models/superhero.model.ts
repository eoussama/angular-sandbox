import { ISuperheroBaseResponse } from '../types/superhero-response-base.type';


export class Superhero {
  id: number;
  name: string;
  image: string;

  /**
   * @description
   * If the superhero is favorited.
   */
  favorite: boolean;

  constructor(model: ISuperheroBaseResponse) {
    this.id = parseInt(model.id);
    this.name = model.name;
    this.image = model.image.url;
    this.favorite = false;
  }
}