import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { selectAuthUserName } from 'src/app/state/auth/auth.selector';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //#region Properties

  /**
   * @description
   * The user's name
   */
  user$!: Observable<string>;

  //#endregion

  //#region Lifecycle

  constructor(
    private store: Store<any>,
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
