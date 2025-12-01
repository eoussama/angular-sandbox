import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Superhero } from 'src/app/models/superhero.model';
import { FavoritesService } from 'src/app/services/favorites/favorites.service';


@Component({
  standalone: false,
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

  constructor(
    private router: Router,
    private favorites: FavoritesService
  ) {
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

    this.superhero.favorite = true;
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

    this.superhero.favorite = false;
    this.favorites.unfavoriteSuperhero(this.superhero.id);
  }

  /**
   * @description
   * Redirects to superhero detail
   */
  onClick(): void {
    this.router.navigate(['dash', 'superheroes', this.superhero.id]);
  }

  //#endregion

  //#region Methods

  /**
   * @description
   * Checks if the superhero has been favorited
   */
  isFavorited(): boolean {
    return this.superhero?.favorite;
  }

  /**
   * @description
   * Returns the thumb's ID
   */
  getId(): string {
    return this.superhero?.id.toString();
  }

  //#endregion
}
