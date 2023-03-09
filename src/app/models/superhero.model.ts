import { ISuperheroBaseResponse } from '../types/superhero-response-base.type';


export class Superhero {
  id: number;
  name: string;
  image: string;

  stats: {
    combat: number;
    durability: number;
    intelligence: number;
    power: number;
    speed: number;
    strength: number;
  };

  bases: Array<string>;
  occupation: string;

  race: string;
  gender: string;
  height: number;
  weight: number;
  eyeColor: string;
  hairColor: string;

  debute: string;
  alterEgo: string;
  fullName: string;
  publisher: string;
  alignment: string;
  birthPlace: string;
  aliases: Array<string>;

  affiliations: Array<string>;
  relatives: Array<string>;

  /**
   * @description
   * If the superhero is favorited.
   */
  favorite: boolean;

  constructor(model?: ISuperheroBaseResponse, isFavorite: boolean = false) {
    this.name = model?.name ?? '';
    this.id = parseInt(model?.id ?? '');
    this.image = model?.image?.url ?? '';

    this.occupation = model?.work?.occupation ?? '';
    this.bases = model?.work?.base?.split(', ') ?? [];

    this.race = model?.appearance?.race ?? '';
    this.gender = model?.appearance?.gender ?? '';
    this.eyeColor = model?.appearance ? (model?.appearance['eye-color'] ?? '') : '';
    this.hairColor = model?.appearance ? (model?.appearance['hair-color'] ?? '') : '';
    this.height = parseInt(model?.appearance?.height[1] ?? '');
    this.weight = parseInt(model?.appearance?.weight[1] ?? '');

    this.aliases = model?.biography?.aliases ?? [];
    this.publisher = model?.biography?.publisher ?? '';
    this.alignment = model?.biography?.alignment ?? '';
    this.fullName = model?.biography ? (model?.biography['full-name'] ?? '') : '';
    this.alterEgo = model?.biography ? (model?.biography['alter-egos'] ?? '') : '';
    this.debute = model?.biography ? (model?.biography['first-appearance'] ?? '') : '';
    this.birthPlace = model?.biography ? (model?.biography['place-of-birth'] ?? '') : '';

    this.relatives = model?.connections?.relatives?.split(', ') ?? [];
    this.affiliations = model?.connections ? (model?.connections['group-affiliation']?.split(', ') ?? []) : [];

    this.stats = {
      power: parseInt(model?.powerstats?.power ?? ''),
      speed: parseInt(model?.powerstats?.speed ?? ''),
      combat: parseInt(model?.powerstats?.combat ?? ''),
      strength: parseInt(model?.powerstats?.strength ?? ''),
      durability: parseInt(model?.powerstats?.durability ?? ''),
      intelligence: parseInt(model?.powerstats?.intelligence ?? '')
    }

    this.favorite = isFavorite;
  }
}