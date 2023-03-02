import { selectAuthUserId } from 'src/app/state/auth/auth.selector';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, forkJoin, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { update } from 'src/app/state/favorites/favoritesd.action';
import { IAppState } from 'src/app/state/app/app.type';
import { Superhero } from 'src/app/models/superhero.model';
import { selectFavorites } from 'src/app/state/favorites/favorites.selector';
import { ISuperheroResponse } from 'src/app/types/superhero-response.type';


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  //#region Lifecycle

  constructor(
    private http: HttpClient,
    private store: Store<IAppState>
  ) { }

  //#endregion

  //#region Methods

  /**
   * @description
   * Loads favorites list
   */
  loadFavorites(favorites: Array<number>): Promise<Array<Superhero>> {
    return new Promise(async (resolve, reject) => {
      firstValueFrom(
        forkJoin(
          // Generating a batch of numbers
          favorites

            // Generating api calls
            .map(e => this.http.get<ISuperheroResponse>(`${environment.api.superheroes}/${e}`))

          // Mapping the values
        ).pipe(map(e => e.map(e => new Superhero(e, true))))
      )
        .then(data => resolve(data))
        .catch(() => reject());
    });
  }

  /**
   * @description
   * Favorites a superhero
   *
   * @param id The ID of the superhero
   */
  favoriteSuperhero(id: number): Promise<void> {
    return new Promise(async (resolve, reject) => {
      const userId = await firstValueFrom(this.store.select(selectAuthUserId));
      const user = await firstValueFrom(this.http.get(`${environment.api.auth}/users/${userId}`)) as any;
      const favorites = Array.from(new Set([...user.favorites, id]));
      const newUser = { ...user, favorites }

      firstValueFrom(this.http.put<any>(`${environment.api.auth}/users/${userId}`, newUser))
        .then(() => {
          this.store.dispatch(update({ favorites }));
          resolve();
        })
        .catch(() => reject());
    })
  }

  /**
   * @description
   * Favorites a superhero
   *
   * @param id The ID of the superhero
   */
  unfavoriteSuperhero(id: number): Promise<void> {
    return new Promise(async (resolve, reject) => {
      const userId = await firstValueFrom(this.store.select(selectAuthUserId));
      const user = await firstValueFrom(this.http.get(`${environment.api.auth}/users/${userId}`)) as any;
      const favorites = Array.from(new Set([...user.favorites, id])).filter(e => e !== id);
      const newUser = { ...user, favorites }

      firstValueFrom(this.http.put<any>(`${environment.api.auth}/users/${userId}`, newUser))
        .then(() => {
          this.store.dispatch(update({ favorites }));
          resolve();
        })
        .catch(() => reject());
    })
  }

  //#endregion
}
