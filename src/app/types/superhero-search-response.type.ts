import { ISuperheroBaseResponse } from './superhero-response-base.type';


export interface ISuperheroSearchResponse {

  /**
   * @description
   * Response status target.
   */
  "results-for"?: string;

  /**
 * @description
 * Response status of the API request.
 */
  response?: string;

  /**
   * @description
   * The optional error message.
   */
  error?: string;

  /**
   * @description
   * Results collection.
   */
  results?: Array<ISuperheroBaseResponse>;
}