import { Component, Input } from '@angular/core';
import { Superhero } from 'src/app/models/superhero.model';
import { FavoritesService } from 'src/app/services/favorites/favorites.service';


@Component({
  selector: 'app-thumb',
  templateUrl: './thumb.component.html',
  styleUrls: ['./thumb.component.scss']
})
export class ThumbComponent {

  //#region Properties

  /**
   * @description
   * The superhero in question
   */
  @Input() superhero!: Superhero;

  /**
   * @description
   * If the card is displaying a loader
   */
  @Input() loader: boolean;

  //#endregion

  //#region Lifecycle

  constructor(private favorites: FavoritesService) {
    this.loader = false;
  }

  //#endregion

  //#region Event listeners

  /**
   * @description
   * Favorites a superhero
   *
   * @param e The mouse event
   */
  onFavorite(e: MouseEvent): void {
    e.stopPropagation();
    this.favorites.favoriteSuperhero(this.superhero.id);
  }

  /**
   * @description
   * Unfavorites a superhero
   *
   * @param e The mouse event
   */
  onUnfavorite(e: MouseEvent): void {
    e.stopPropagation();
    this.favorites.unfavoriteSuperhero(this.superhero.id);
  }

  //#region 

}
