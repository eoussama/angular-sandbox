import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, forkJoin, map } from 'rxjs';
import { Superhero } from 'src/app/models/superhero.model';
import { environment } from 'src/environments/environment';
import { ISuperheroResponse } from 'src/app/types/superhero-response.type';
import { ISuperheroSearchResponse } from 'src/app/types/superhero-search-response.type';
import { selectFavorites } from 'src/app/state/favorites/favorites.selector';
import { IAppState } from 'src/app/state/app/app.type';
import { Store } from '@ngrx/store';


@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  //#region Lifecycle

  constructor(
    private http: HttpClient,
    private store: Store<IAppState>
  ) { }

  //#endregion

  //#region Methods

  /**
   * @description
   * Fetches info on a particular superhero
   *
   * @param id The ID of the superhero to fetch
   */
  getSuperheroById(id: number): Promise<Superhero> {
    return new Promise((resolve, reject) => {
      firstValueFrom(this.http.get<ISuperheroResponse>(`${environment.api.superheroes}/${id}`))
        .then(data => {
          resolve(new Superhero(data));
        })
        .catch(() => reject())
    })
  }

  /**
   * @description
   * Fetches info on a particular superhero
   *
   * @param search The search query
   */
  getSuperheroBySearch(search: string): Promise<Array<Superhero>> {
    return new Promise((resolve, reject) => {
      firstValueFrom(this.http.get<ISuperheroSearchResponse>(`${environment.api.superheroes}/search/${search}`))
        .then(async data => {
          if (data.error) {
            reject();
          }

          const favorites = await firstValueFrom(this.store.select(selectFavorites))
          const superheroes = data.results?.map(e => new Superhero(e, favorites.includes(parseInt(e.id)))) ?? [];

          resolve(superheroes);
        })
        .catch(() => reject())
    })
  }

  /**
   * @description
   * Fetches the list of all superheroes
   *
   * @param page The target page
   */
  getSuperheroes(page: number): Promise<Array<Superhero>> {
    return new Promise(async (resolve, reject) => {
      const maxId = environment.totalEntries;
      const pageSize = environment.pageSize;
      const totalPages = Math.ceil(maxId / 10);
      const targetPage = Math.min(Math.max(1, page), totalPages) - 1
      const first = pageSize * targetPage;
      const nextBatch = Math.min(pageSize, Math.abs(maxId - first));

      const favorites = await firstValueFrom(this.store.select(selectFavorites))

      firstValueFrom(
        forkJoin(
          // Generating a batch of numbers
          [...Array(nextBatch)]

            // Sanitizing the numbers
            .map((_, i) => i + 1 + first)

            // Generating api calls
            .map(e => this.http.get<ISuperheroResponse>(`${environment.api.superheroes}/${e}`))

          // Mapping the values
        ).pipe(map(e => e.map(e => new Superhero(e, favorites.includes(parseInt(e.id))))))
      )
        .then(data => resolve(data))
        .catch(() => reject())
    })
  }

  //#endregion
}
