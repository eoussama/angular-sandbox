import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { login, logout } from 'src/app/state/auth/auth.action';
import { selectAuthUser } from 'src/app/state/auth/auth.selector';
import { environment } from 'src/environments/environment';
import { reset, update } from 'src/app/state/favorites/favoritesd.action';


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
   * @param username The username that wants to log in
   * @param password The password rerlated to the username
   */
  login(username: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      firstValueFrom(
        this.http.get<Array<any>>(`${environment.api.auth}/users?username=${username}&password=${password}`)
      ).then(data => {
        if (data.length > 0) {

          // Simulating latency for 1.2 second
          setTimeout(() => {
            const user = data[0];

            this.store.dispatch(login({ id: user.id, username: user.username }));
            this.store.dispatch(update({ favorites: user.favorites }))

            resolve();
          }, 1200);
        } else {
          reject();
        }
      });
    });
  }

  /**
   * @description
   * Logs user out
   */
  logout(): void {
    this.store.dispatch(logout());
    this.store.dispatch(reset());
  }

  //#endregion
}
