export interface ISuperheroBaseResponse {

  /**
   * @description
   * Unique identifier for the superhero.
   */
  id: string;

  /**
   * @description
   * Name of the superhero.
   */
  name: string;

  /**
   * @description
   * Power stats of the superhero.
   */
  powerstats: {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
  };

  /**
   * @description
   * Biography information of the superhero.
   */
  biography: {
    "full-name": string;
    "alter-egos": string;
    aliases: Array<string>;
    "place-of-birth": string;
    "first-appearance": string;
    publisher: string;
    alignment: string;
  };

  /**
   * @description
   * Physical appearance details of the superhero.
   */
  appearance: {
    gender: string;
    race: string;
    height: Array<string>;
    weight: Array<string>;
    "eye-color": string;
    "hair-color": string;
  };

  /**
   * @description
   * Work information of the superhero.
   */
  work: {
    occupation: string;
    base: string;
  };

  /**
   * @description
   * Connections information of the superhero.
   */
  connections: {
    "group-affiliation": string;
    relatives: string;
  };

  /**
   * @description
   * Image information of the superhero.
   */
  image: {
    url: string;
  };
}
