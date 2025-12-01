import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { selectAuthUserName } from 'src/app/state/auth/auth.selector';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { IAppState } from 'src/app/state/app/app.type';


@Component({
  standalone: false,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  //#region Properties

  /**
   * @description
   * The user's name
   */
  user$!: Observable<string>;

  //#endregion

  //#region Lifecycle

  constructor(
    private store: Store<IAppState>,
    private auth: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.user$ = this.store.select(selectAuthUserName);
  }

  //#endregion

  //#region Event listeners

  /**
   * @description
   * Logs user out
   */
  onLogout(): void {
    this.auth.logout();
  }

  //#endregion
}
