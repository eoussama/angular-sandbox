import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //#region Properties

  /**
   * @description
   * Loggin form
   */
  form!: FormGroup;

  //#endregion

  //#region Lifecycle

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  //#endregion

  //#region Event listeners

  /**
   * @description
   * Logs the user in
   */
  onLogin(): void {
    if (!this.form.valid) {
      return alert('Fill-in the loggin form');
    }

    this.auth.login(this.form.value.username);
  }

  //#endregion

  //#region Methods

  /**
   * @description
   * Creates the logign form
   */
  private createForm(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  //#endregion
}
