import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { UserState } from 'src/app/state/auth.type';


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
  user$!: Observable<UserState>;

  //#endregion

  //#region Lifecycle

  constructor(
    private store: Store<any>,
    private auth: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.user$ = this.store.select('user');
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
