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

  constructor(model?: { [key in keyof Stats]: string }) {
    this.combat = parseInt(model?.combat ?? '');
    this.durability = parseInt(model?.durability ?? '');
    this.intelligence = parseInt(model?.intelligence ?? '');
    this.power = parseInt(model?.power ?? '');
    this.speed = parseInt(model?.speed ?? '');
    this.strength = parseInt(model?.strength ?? '');
  }
}