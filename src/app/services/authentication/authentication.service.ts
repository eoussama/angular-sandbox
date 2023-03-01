import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { login, logout } from 'src/app/state/auth/auth.action';
import { selectAuthUser } from 'src/app/state/auth/auth.selector';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //#region Lifecycle

  constructor(
    private http: HttpClient,
    private store: Store<any>
  ) { }

  //#endregion

  //#region Methods

  /**
   * @description
   * Checks if user is logged in
   */
  isLoggedIn(): Observable<boolean> {
    return new Observable(observer => {
      firstValueFrom(this.store.select(selectAuthUser)).then(e => observer.next(Boolean(e?.username)));
    });
  }

  /**
   * @description
   * Logs user in
   *
   * @param username The username that logged in
   */
  login(username: string): void {
    this.http.get('http://localhost:3000/posts').subscribe(console.log);
    this.store.dispatch(login({ username }));
  }

  /**
   * @description
   * Logs user out
   */
  logout(): void {
    this.store.dispatch(logout());
  }

  //#endregion
}
