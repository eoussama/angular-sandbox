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

  transform(value: Observable<Array<number>>): any {
    return new Observable(observer => {
      firstValueFrom(value)
        .then(async favorites => {
          const superheroes = await this.favorites.loadFavorites(favorites);
          observer.next(superheroes);
        });
    });
  }

  //#endregion
}