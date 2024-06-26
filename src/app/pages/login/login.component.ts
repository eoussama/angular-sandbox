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

  /**
   * @description
   * The loadingg state
   */
  loading: boolean;

  //#endregion

  //#region Lifecycle

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService
  ) {
    this.loading = false;
  }

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
    console.log('login');
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.loading = true;

      const username = this.form.value.username;
      const password = this.form.value.password;

      this.auth.login(username, password)
        .catch(() => alert('Invalid username or password!'))
        .finally(() => this.loading = false)
    }
  }

  //#endregion

  //#region Methods

  /**
   * @description
   * Checks if the control has any error
   *
   * @param controlName The target name of the control
   */
  hasError(controlName: string): boolean {
    return Boolean(this.form.get(controlName)?.touched && this.form.get(controlName)?.hasError('required'));
  }

  /**
   * @description
   * Creates the logign form
   */
  private createForm(): void {
    this.form = this.fb.group({
      username: ['test', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  //#endregion
}
