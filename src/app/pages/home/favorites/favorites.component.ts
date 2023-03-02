import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/state/app/app.type';
import { selectFavorites } from 'src/app/state/favorites/favorites.selector';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  //#region Properties

  /**
   * @description
   * The list of favorites
   */
  favorites$!: Observable<Array<number>>;

  //#endregion

  //#region Lifecycle

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.favorites$ = this.store.select(selectFavorites);
  }

  //#endregion
}
