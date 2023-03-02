import { selectFavorites } from 'src/app/state/favorites/favorites.selector';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/state/app/app.type';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  //#region Properties

  favorites$!: Observable<Array<number>>;

  //#endregion

  //#region Lifecycle

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.favorites$ = this.store.select(selectFavorites)
  }

  //#endregion
}
