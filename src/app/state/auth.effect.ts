import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthAction } from './auth.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';


@Injectable()
export class AuthEffects {

  //#region Properties

  loginNavigation$ = createEffect(() => this.actions$.pipe(
    ofType(AuthAction.Login),
    tap(() => this.router.navigate(['/home']))
  ), { dispatch: false });

  logoutNavigation$ = createEffect(() => this.actions$.pipe(
    ofType(AuthAction.Logout),
    tap(() => this.router.navigate(['/login']))
  ), { dispatch: false });

  //#endregion

  //#region Lifecycle

  constructor(
    private router: Router,
    private actions$: Actions
  ) { }

  //#endregion
}