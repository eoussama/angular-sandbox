/**
 * @model
 * @description
 * The stats model, subset of Superhero
 */
export class Stats {

  /**
   * @description
   * The combat stats
   */
  combat: number;

  /**
   * @description
   * The durability stats
   */
  durability: number;

  /**
   * @description
   * The intelligence stats
   */
  intelligence: number;

  /**
   * @description
   * The power stats
   */
  power: number;

  /**
   * @description
   * The speed stats
   */
  speed: number;

  /**
   * @description
   * The strength stat
   */
  strength: number;

  constructor(model?: { [key in keyof Stats]: number | string }) {
    this.combat = parseInt(model?.combat as string);
    this.durability = parseInt(model?.durability as string);
    this.intelligence = parseInt(model?.intelligence as string);
    this.power = parseInt(model?.power as string);
    this.speed = parseInt(model?.speed as string);
    this.strength = parseInt(model?.strength as string);
  }
}