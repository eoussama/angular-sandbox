import { firstValueFrom, Observable } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites/favorites.service';


@Pipe({
  name: 'favorite'
})
export class FavoritePipe implements PipeTransform {

  //#region Lifecycle

  constructor(private favorites: FavoritesService) { }

  //#endregion

  //#region Methods

  transform(value: Array<number>): any {
    return new Observable(observer => {
      new Promise(async (resolve) => {
        const superheroes = await this.favorites.loadFavorites(value);
        observer.next(superheroes);
        resolve(0);
      })
    });
  }

  //#endregion
}
