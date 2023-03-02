import { ISuperheroBaseResponse } from './superhero-response-base.type';


export interface ISuperheroResponse extends ISuperheroBaseResponse {

  /**
   * @description
   * Response status of the API request.
   */
  response: string;
}